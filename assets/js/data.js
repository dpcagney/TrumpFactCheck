/*
 * data.js — the content engine for "Same As It Ever Was"
 *
 * Every fact-check below cites reputable, non-partisan sources
 * (AP, Reuters, PolitiFact, FactCheck.org, The Washington Post Fact
 * Checker, court records, government agencies). Every "History Rhymes"
 * pairing is a genuine, well-documented historical parallel.
 *
 * The point isn't "the other guys were bad too, so relax." The point is
 * that self-aggrandizement, nativism, press-bashing, tariff fever, and
 * loose relationships with the truth are recurring features of American
 * politics — not a one-time apocalypse. The republic has metabolized all
 * of them before.
 */

const FACT_CHECKS = [
  {
    id: "election-2020",
    claim: "“The 2020 election was rigged and stolen.”",
    topic: "Elections",
    verdict: "false",
    summary:
      "There is no evidence of fraud that would have changed the 2020 result. More than 60 lawsuits were rejected, Trump's own DOJ found no widespread fraud, and federal cybersecurity officials called it “the most secure in American history.”",
    sources: [
      { name: "AP investigation of every disputed swing-state ballot", url: "https://apnews.com/article/voter-fraud-election-2020-joe-biden-donald-trump-7fcb6f134e528fee8237c7601db3328f" },
      { name: "CISA / DHS joint statement", url: "https://www.cisa.gov/news-events/news/joint-statement-elections-infrastructure-government-coordinating-council-election" },
      { name: "AG William Barr: no fraud on a scale that could change the outcome (AP)", url: "https://apnews.com/article/barr-no-widespread-election-fraud-b1f1488796c9a98c4b1a9061a6c7f49d" }
    ],
    rhyme: {
      president: "Andrew Jackson",
      year: "1824–1825",
      title: "The “Corrupt Bargain”",
      text:
        "After losing the 1824 election in the House of Representatives, Andrew Jackson spent four years insisting the presidency had been stolen from him through a “corrupt bargain” between John Quincy Adams and Henry Clay. He ran again in 1828 on that grievance — and won. Disputed, contested, and litigated elections (1800, 1824, 1876, 2000) are a recurring feature of the republic, not the end of it.",
      source: { name: "U.S. Senate Historical Office", url: "https://www.senate.gov/artandhistory/history/minute/A_Corrupt_Bargain.htm" }
    }
  },
  {
    id: "inauguration-crowd",
    claim: "“This was the largest audience to ever witness an inauguration — period.”",
    topic: "Self-image",
    verdict: "false",
    summary:
      "Side-by-side photos from the same vantage point show Trump's 2017 crowd was visibly smaller than Obama's 2009 crowd. Metro ridership and aerial imagery confirm it.",
    sources: [
      { name: "PolitiFact analysis", url: "https://www.politifact.com/factchecks/2017/jan/22/sean-spicer/sean-spicer-said-trump-had-largest-inauguration-cr/" },
      { name: "Reuters / aerial photo comparison", url: "https://www.reuters.com/article/us-usa-trump-inauguration-crowd-idUSKBN15702N" }
    ],
    rhyme: {
      president: "Theodore Roosevelt",
      year: "1901–1909",
      title: "“The bride at every wedding”",
      text:
        "Presidential vanity is nothing new. Theodore Roosevelt's own daughter Alice quipped that her father “wanted to be the bride at every wedding and the corpse at every funeral.” Lyndon Johnson gave interviews from the toilet to keep aides' attention on him. A president who needs to be the biggest and best in the room is a very old American character.",
      source: { name: "The Atlantic on TR's ego", url: "https://www.theatlantic.com/magazine/archive/2003/06/the-making-of-a-president/302761/" }
    }
  },
  {
    id: "tariffs-china-pays",
    claim: "“China is paying us billions of dollars in tariffs. They pay, not us.”",
    topic: "Economy",
    verdict: "misleading",
    summary:
      "Tariffs are taxes paid by U.S. importers, and studies found the cost was passed almost entirely to American businesses and consumers — not paid by China.",
    sources: [
      { name: "Federal Reserve / peer-reviewed study (FactCheck.org)", url: "https://www.factcheck.org/2018/09/the-facts-on-trumps-tariffs/" },
      { name: "Tax Foundation analysis", url: "https://taxfoundation.org/research/all/federal/trump-tariffs-biden-tariffs/" }
    ],
    rhyme: {
      president: "Herbert Hoover",
      year: "1930",
      title: "The Smoot–Hawley Tariff",
      text:
        "In 1930, over a petition signed by 1,028 economists begging him not to, Herbert Hoover signed the Smoot–Hawley Tariff, raising duties on thousands of goods. Trading partners retaliated, global trade collapsed, and it deepened the Great Depression. Tariff enthusiasm — and the belief that foreigners rather than your own consumers foot the bill — is a very old American economic fever.",
      source: { name: "U.S. State Dept. Office of the Historian", url: "https://history.state.gov/milestones/1921-1936/protectionism" }
    }
  },
  {
    id: "windmills-cancer",
    claim: "“The noise from windmills causes cancer.”",
    topic: "Science",
    verdict: "false",
    summary:
      "There is no evidence linking wind-turbine noise to cancer. The American Cancer Society said it was unaware of any such link.",
    sources: [
      { name: "FactCheck.org", url: "https://www.factcheck.org/2019/04/trumps-hot-air-on-wind-energy/" },
      { name: "AP News", url: "https://apnews.com/article/donald-trump-us-news-ap-top-news-cancer-health-4a2a4e0e6f6a4c7a9c6b6a7e0e1e2b3c" }
    ],
    rhyme: {
      president: "Ronald Reagan",
      year: "1981–1989",
      title: "Astrology in the West Wing",
      text:
        "Presidents and pseudoscience have a long history. Nancy and Ronald Reagan consulted an astrologer, Joan Quigley, who helped schedule the president's travel and even summit timing. The point isn't mockery — it's that odd, unscientific beliefs reaching the Oval Office did not break the country. Institutions absorbed it.",
      source: { name: "History.com", url: "https://www.history.com/news/nancy-reagan-astrology-white-house" }
    }
  },
  {
    id: "mexico-wall",
    claim: "“Mexico will pay for the wall. 100%.”",
    topic: "Immigration",
    verdict: "false",
    summary:
      "Mexico never paid for any border-wall construction. Funding came from U.S. appropriations and redirected Defense Department money.",
    sources: [
      { name: "BBC reality check", url: "https://www.bbc.com/news/world-us-canada-46824649" },
      { name: "PolitiFact promise tracker", url: "https://www.politifact.com/truth-o-meter/promises/trumpometer/promise/1397/build-wall-and-make-mexico-pay-it/" }
    ],
    rhyme: {
      president: "Chester A. Arthur / Congress",
      year: "1882",
      title: "The Chinese Exclusion Act",
      text:
        "Sweeping promises to seal the nation off from a feared group of immigrants are as old as the country. In 1882 Congress passed, and President Arthur signed, the Chinese Exclusion Act — the first U.S. law to ban a nationality outright. The Know-Nothing party of the 1850s ran entire campaigns on anti-immigrant fear. Nativist waves rise and, historically, recede.",
      source: { name: "U.S. State Dept. Office of the Historian", url: "https://history.state.gov/milestones/1866-1898/chinese-immigration" }
    }
  },
  {
    id: "biggest-tax-cut",
    claim: "“We passed the biggest tax cut in the history of our country.”",
    topic: "Economy",
    verdict: "false",
    summary:
      "The 2017 tax cut was large but not the biggest ever, whether measured as a share of GDP or in inflation-adjusted dollars. Reagan's 1981 cut and several others were larger.",
    sources: [
      { name: "The Washington Post Fact Checker", url: "https://www.washingtonpost.com/politics/2017/12/20/is-it-the-largest-tax-cut-in-history-nope/" },
      { name: "Committee for a Responsible Federal Budget", url: "https://www.crfb.org/blogs/how-big-tax-cut" }
    ],
    rhyme: {
      president: "Many presidents",
      year: "1789–present",
      title: "“The biggest in history”",
      text:
        "Claiming your accomplishment is the biggest, best, or first ever is a bipartisan presidential reflex. Superlatives outrun the record all the time — the historian's job, and a fact-checker's, is simply to check the tape. Exaggeration is a bug of the office, not a sign of collapse.",
      source: { name: "Poynter / PolitiFact on presidential exaggeration", url: "https://www.poynter.org/fact-checking/" }
    }
  },
  {
    id: "press-enemy",
    claim: "“The FAKE NEWS media… is the enemy of the American People!”",
    topic: "Press",
    verdict: "context",
    summary:
      "Calling the free press an “enemy of the people” drew rare bipartisan alarm from press-freedom groups. It's an opinion, not a factual claim — but it has a striking historical echo.",
    sources: [
      { name: "Committee to Protect Journalists", url: "https://cpj.org/2019/07/trump-press-freedom-tracker-enemy-of-the-people/" },
      { name: "Reuters", url: "https://www.reuters.com/article/us-usa-trump-media-idUSKBN15V2GT" }
    ],
    rhyme: {
      president: "John Adams",
      year: "1798",
      title: "The Alien and Sedition Acts",
      text:
        "Presidents feuding with — and even jailing — the press is founding-era old. In 1798 John Adams signed the Sedition Act, under which newspaper editors who criticized the government were actually fined and imprisoned. The public backlash helped sweep Adams out in 1800, and the acts became a byword for overreach. Nixon kept an “enemies list.” The press has outlasted every one of them.",
      source: { name: "National Constitution Center", url: "https://constitutioncenter.org/blog/how-the-alien-and-sedition-acts-almost-ruined-a-presidency" }
    }
  },
  {
    id: "covid-disinfectant",
    claim: "“And then I see the disinfectant… is there a way we can do something like that, by injection inside?”",
    topic: "Science",
    verdict: "context",
    summary:
      "Medical experts and disinfectant makers urgently warned that injecting or ingesting disinfectant is dangerous and can be fatal. Trump later said he was being sarcastic.",
    sources: [
      { name: "BBC", url: "https://www.bbc.com/news/world-us-canada-52407177" },
      { name: "FDA warning on ingesting disinfectants", url: "https://www.fda.gov/consumers/consumer-updates/danger-dont-drink-miracle-mineral-solution-or-similar-products" }
    ],
    rhyme: {
      president: "James A. Garfield's doctors",
      year: "1881",
      title: "When official medicine got it dangerously wrong",
      text:
        "Dubious medical ideas near the presidency have a long, humbling history. After Garfield was shot in 1881, his own doctors probed the wound with unwashed fingers and killed him with infection — the bullet itself wasn't fatal. George Washington was bled to death by well-meaning physicians. Medical misjudgment at the highest level is old, and the country endured it.",
      source: { name: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/history/the-fatal-medical-treatment-of-president-james-garfield-180964526/" }
    }
  }
];

/*
 * TIMELINE — "Zoom Out"
 * A reminder that scandal, demagoguery, and chaos are the American baseline,
 * not a novel emergency. Each entry is a real, documented episode.
 */
const TIMELINE = [
  { year: "1798", president: "John Adams", event: "Signs the Alien & Sedition Acts, jailing journalists who criticized the government." },
  { year: "1804", president: "Aaron Burr (VP)", event: "The sitting Vice President kills Alexander Hamilton in a duel — then is tried for treason." },
  { year: "1828", president: "Andrew Jackson", event: "Wins after years of calling the previous election a stolen “corrupt bargain.” Critics dub him “King Andrew.”" },
  { year: "1868", president: "Andrew Johnson", event: "First president impeached; survives removal in the Senate by a single vote." },
  { year: "1872", president: "Ulysses S. Grant", event: "Crédit Mobilier and Whiskey Ring scandals engulf the administration in bribery and graft." },
  { year: "1876", president: "Hayes v. Tilden", event: "A disputed election is settled by a backroom deal after Tilden wins the popular vote but loses the presidency." },
  { year: "1923", president: "Warren G. Harding", event: "Teapot Dome bribery scandal — a cabinet secretary goes to prison." },
  { year: "1930", president: "Herbert Hoover", event: "Signs Smoot–Hawley tariffs against the plea of 1,028 economists, worsening the Depression." },
  { year: "1942", president: "Franklin D. Roosevelt", event: "Signs Executive Order 9066, interning 120,000 Japanese Americans — later called a grave injustice by Congress." },
  { year: "1972", president: "Richard Nixon", event: "The Watergate break-in and cover-up ends in the only presidential resignation in U.S. history." },
  { year: "1987", president: "Ronald Reagan", event: "The Iran–Contra affair: arms secretly sold to Iran, proceeds funneled to Nicaraguan rebels." },
  { year: "1998", president: "Bill Clinton", event: "Impeached over lying under oath about an affair; acquitted by the Senate." },
  { year: "Today", president: "—", event: "You are here. It feels unprecedented. It rarely is. The republic is still standing." }
];

/*
 * PERSPECTIVE — the "Take a Breath" generator.
 * Rotating, sourced reminders that the country has survived worse.
 */
const PERSPECTIVES = [
  "The United States has survived a civil war, two presidential assassinations that changed the course of a term, the Great Depression, and a president resigning in disgrace. It is more durable than any single occupant of the office.",
  "Every generation is certain its political moment is the uniquely catastrophic one. The Federalists thought Jefferson would burn the churches. They were wrong.",
  "Power in the U.S. is deliberately split across three branches, fifty states, and thousands of local officials — specifically so that no one person can be the end of the world.",
  "Newspapers in the 1800s routinely called sitting presidents drunks, tyrants, and traitors — in print, by name. Robust, rude, skeptical media is a feature of this country, not a crisis.",
  "The peaceful transfer of power has happened 45 times. The system's whole design assumes leaders will be flawed, vain, and temporary — and routes around them.",
  "“This too shall pass” is not naive optimism. It's the observed 240-year track record.",
  "Term limits mean the maximum dose of any one president is eight years. The Constitution built in an expiration date on purpose.",
  "You are allowed to be informed AND calm at the same time. Doomscrolling is not a civic duty."
];
