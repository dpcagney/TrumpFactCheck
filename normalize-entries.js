#!/usr/bin/env node
/*
 * normalize-entries.js
 *
 * Idempotently normalizes the ENTRIES array in assets/js/data.js:
 *  - decodes stray HTML entities in text fields
 *  - (re)computes `roleCat` (the ~11 role buckets the Role filter uses)
 *  - (re)computes `theme` (the 14 themes that power "History rhymes")
 *  - drops entries missing a person/date/valid source or a valid verdict tag
 *  - de-duplicates by person + date, then sorts newest-first
 *
 * Run this after adding entries (e.g. in the scheduled refresh) so new rows
 * always have the fields the UI depends on:
 *     node normalize-entries.js && node build-standalone.js
 */
const fs = require("fs");
const dataPath = require("path").join(__dirname, "assets/js/data.js");

const text = fs.readFileSync(dataPath, "utf8");
const marker = "const ENTRIES = ";
const idx = text.indexOf(marker);
if (idx < 0) throw new Error("ENTRIES not found in data.js");
const entries = eval(text.slice(idx + marker.length).replace(/;\s*$/, ""));
const head = text.slice(0, idx).replace(/\s*$/, "") + "\n\n";

const ALLOWED = new Set(["False", "Misleading", "Needs Context", "Broken Promise", "Scandal", "Gaffe", "Overreach"]);
const decode = (s) => String(s == null ? "" : s)
  .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ");
const ROLE_MAP = {
  "President of the United States": "President",
  "Vice President of the United States": "Vice President",
  "U.S. Attorney General": "Attorney General",
  "Attorney General of the United States": "Attorney General",
  "Secretary of Health and Human Services": "Secretary of Health & Human Services",
};
function roleCat(r) {
  const s = r.toLowerCase();
  if (/vice president/.test(s)) return "Vice President";
  if (/president|governor.*(candidate|nominee)/.test(s)) return "President / Candidate";
  if (/attorney general/.test(s)) return "Attorney General";
  if (/press secretary/.test(s)) return "Press Secretary";
  if (/national security|nsc/.test(s)) return "National Security";
  if (/chief of staff|counselor|counsel|advisor|adviser|counterterror/.test(s)) return "White House Staff / Advisor";
  if (/secretary of|administrator|director|postmaster|commissioner|collector|custodian|budget|omb|fbi/.test(s)) return "Cabinet / Agency Head";
  if (/ambassador|minister to|diplomat/.test(s)) return "Diplomat";
  if (/justice|judge/.test(s)) return "Judiciary";
  if (/senator|speaker|congress|representative/.test(s)) return "Congress";
  if (/general|army|military/.test(s)) return "Military";
  if (/brother|son|family|financier|donor|campaign|economist|consultant|private|associate|banker/.test(s)) return "Associate / Outside";
  return "Other";
}
function theme(topic, summary, tag) {
  const s = (topic + " " + summary).toLowerCase();
  if (/\belection|corrupt bargain|birther|electoral|stolen|rigged|disputed|voter|inaugurat/.test(s)) return "Elections & Legitimacy";
  if (/iran-contra|contra|watergate|impeach|obstruct|perjury|saturday night massacre|contempt|cover-up|special counsel|russia|ukraine|pardon|clemency|autopen|enemies list/.test(s)) return "Cover-ups & Abuse of Justice";
  if (/vaccine|autism|tylenol|measles|covid|disinfect|swine flu|pandemic|\bhealth|science|windmill|cancer|addison/.test(s)) return "Science & Health";
  if (/surveillance|wiretap|\bnsa\b|\bspy|u-2|signal|classified|intelligence|\bfbi\b|drone/.test(s)) return "Secrecy & Surveillance";
  if (/tariff|inflation|\bprice|\btax|deficit|econom|\bjobs|manufacturing|budget|spending|doge|salary grab|gold|stimulus/.test(s)) return "Economy & Money";
  if (/bribe|graft|kickback|embezzl|fraud|teapot|whiskey|crédit|credit mobilier|influence|ethics|star route|\bhud\b|wedtech|banking|jet|gifts?|vicuña|five-percent|corrupt|swartwout|epstein/.test(s)) return "Corruption & Graft";
  if (/segregation|klan|birth of a nation|willie horton|charlottesville|slavery|\brace\b|racist|native|removal|trail of tears|internment|exclusion/.test(s)) return "Race & Exclusion";
  if (/immigration|deport|border|\bwall\b|birthright|muslim|travel ban/.test(s)) return "Immigration & Borders";
  if (/war|iraq|wmd|vietnam|tonkin|foreign|panama|greenland|canal|cuba|bay of pigs|afghan|\biran\b|dominican|korea|domino|missile|nuclear|liberators|51st state|south africa|mission accomplished|bombing|bonus army/.test(s)) return "War & Foreign Policy";
  if (/sedition|espionage|habeas|loyalty|palmer|red scare|free speech|\bpress\b|censor|fake news|alternative facts|cheap fakes|enemy of the people/.test(s)) return "Speech & Civil Liberties";
  if (/affair|lewinsky|reynolds|hunting|duel|halpin|nan britton|hemings|personal conduct|morals|petticoat/.test(s)) return "Personal Conduct";
  if (tag === "Gaffe" || /gaffe|hot mic|potato|misunderestimated|slur|offensive/.test(s)) return "Gaffes & Hot Mics";
  if (tag === "Overreach" || /overreach|executive order|court-packing|steel seizure|censure|patronage|spoils/.test(s)) return "Executive Overreach";
  return "Other Controversies";
}
function norm(e) {
  const role = ROLE_MAP[(e.role || "").trim()] || decode(e.role).trim();
  return {
    date: (e.date || "").slice(0, 10),
    dateText: decode(e.dateText).trim(),
    person: decode(e.person).trim(),
    role,
    roleCat: roleCat(role),
    admin: decode(e.admin).trim(),
    party: decode(e.party || "—").trim(),
    topic: decode(e.topic).trim(),
    tag: (e.tag || "").trim(),
    theme: theme(decode(e.topic), decode(e.summary), (e.tag || "").trim()),
    summary: decode(e.summary).trim(),
    source: { name: decode(e.source && e.source.name).trim(), url: (e.source && e.source.url || "").trim() },
  };
}

const seen = new Set();
const out = [];
let dropped = 0;
for (const raw of entries.map(norm)) {
  if (!raw.person || !raw.date || isNaN(Date.parse(raw.date)) || !/^https?:\/\//.test(raw.source.url) || !ALLOWED.has(raw.tag)) { dropped++; continue; }
  const key = raw.person.toLowerCase() + "|" + raw.date;
  if (seen.has(key)) { dropped++; continue; }
  seen.add(key);
  out.push(raw);
}
out.sort((a, b) => b.date.localeCompare(a.date));

fs.writeFileSync(dataPath, head + "const ENTRIES = [\n" + out.map((e) => "  " + JSON.stringify(e)).join(",\n") + "\n];\n");
console.log(`Normalized ENTRIES: ${out.length} kept, ${dropped} dropped/deduped.`);
