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
    id: "prices-2025",
    claim: "“We've ended inflation… prices are down. Eggs are down 50, 60, 70 percent.”",
    topic: "Economy",
    verdict: "misleading",
    summary:
      "It's a mix. Wholesale egg prices did fall sharply in early 2025 as an avian-flu spike eased, and by late 2025 retail eggs were well below their January peak — but overall inflation (headline CPI) rose during Trump's first year back, so “ended” overstates it. Economists credit the bird-flu cycle, not policy, for the egg swings.",
    sources: [
      { name: "FactCheck.org — “Are Prices Up or Down?” (July 2025)", url: "https://www.factcheck.org/2025/07/are-prices-up-or-down-parsing-misleading-claims-by-trump-and-democrats/" },
      { name: "PolitiFact — fact-checking the egg-price claim (Apr 2025)", url: "https://www.politifact.com/factchecks/2025/apr/04/donald-trump/fact-checking-trumps-statement-about-declining-egg/" },
      { name: "PolitiFact — inflation after one year under Trump (Jan 2026)", url: "https://www.politifact.com/article/2026/jan/20/trump-inflation-one-year-groceries-cars-prices/" }
    ],
    rhyme: {
      president: "Richard Nixon",
      year: "1971",
      title: "Wage and Price Controls",
      text:
        "Presidents get outsized blame and credit for prices they mostly don't control in the short run. In August 1971 Richard Nixon tried to freeze wages and prices by executive order to kill inflation. It was wildly popular at first — and failed within two years, producing shortages and distortions before inflation roared back worse than before. Overpromising on prices is a bipartisan presidential tradition.",
      source: { name: "Federal Reserve History — “The Great Inflation”", url: "https://www.federalreservehistory.org/essays/great-inflation" }
    }
  },
  {
    id: "tylenol-autism",
    claim: "“Don't take Tylenol… taking it during pregnancy is linked to autism.”",
    topic: "Science",
    verdict: "false",
    summary:
      "No study has shown acetaminophen (Tylenol) causes autism — decades of research show, at most, an unproven association, and several studies show none. The American College of Obstetricians and Gynecologists and the American Academy of Pediatrics warn that untreated fever or pain in pregnancy carries real risks, so telling women to “tough it out” can itself do harm.",
    sources: [
      { name: "FactCheck.org — Tylenol and autism claims (Sept 2025)", url: "https://www.factcheck.org/2025/09/trump-administrations-problematic-claims-on-tylenol-and-autism/" },
      { name: "NPR — the science doesn't back it up", url: "https://www.npr.org/sections/shots-health-news/2025/09/22/nx-s1-5550153/trump-rfk-autism-tylenol-leucovorin-pregnancy" },
      { name: "PolitiFact — Tylenol, autism and vaccine claims", url: "https://www.politifact.com/article/2025/sep/23/autism-tylenol-announcement-vaccine-claims/" }
    ],
    rhyme: {
      president: "Gerald Ford",
      year: "1976",
      title: "The Swine Flu Vaccination Fiasco",
      text:
        "Health misjudgment at the top isn't partisan or new. In 1976, fearing a pandemic, the Ford administration rushed to vaccinate the entire country against swine flu — more than 40 million people in a few months. The pandemic never came, the shot was tied to a rare paralytic side effect, and the program was halted. Government getting the science wrong — in either direction — is old, and the institutions course-correct.",
      source: { name: "Gerald R. Ford Presidential Library", url: "https://www.fordlibrarymuseum.gov/digital-research-room/topic-guides/swine-flu-immunization-program-1976" }
    }
  },
  {
    id: "tariff-revenue-2025",
    claim: "“We're taking in $2 billion a day in tariffs — $88 billion in just two months.”",
    topic: "Economy",
    verdict: "false",
    summary:
      "Treasury data showed tariff collections running well below those figures — the $88 billion claim was more than double the actual two-month total, and trade experts said “$2 billion a day” wasn't supported. And because tariffs are paid by U.S. importers, this “revenue” is largely a tax on Americans, not a check from abroad.",
    sources: [
      { name: "PolitiFact — “almost $2 billion a day” (Apr 2025)", url: "https://www.politifact.com/factchecks/2025/apr/10/donald-trump/fact-check-trump-said-tariffs-collections-are-almo/" },
      { name: "FactCheck.org — recapping deceptive tariff claims (Aug 2025)", url: "https://www.factcheck.org/2025/08/recapping-trumps-deceptive-tariff-claims/" }
    ],
    rhyme: {
      president: "William McKinley",
      year: "1890",
      title: "When tariffs really did fund the government",
      text:
        "There's a grain of history here. Before the federal income tax, tariffs were the main source of federal revenue — over half of it — and Rep. William McKinley built a career on the 1890 tariff that bears his name. But the country deliberately moved to an income tax (ratified 1913) because tariffs are a regressive, volatile way to fund a modern government, and the McKinley Tariff's own unpopularity helped drive that shift. The nostalgia is real; the modern math isn't.",
      source: { name: "U.S. House of Representatives — “The McKinley Tariff of 1890”", url: "https://history.house.gov/Historical-Highlights/1851-1900/The-McKinley-Tariff-of-1890/" }
    }
  },
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

/*
 * ENTRIES — "The Matrix"
 * Documented controversial statements & actions across U.S. administrations
 * and roles (President, VP, cabinet, advisors, staff). Each has the date it
 * was said or reported, a reputable source, and a verdict/type tag.
 * Curated and sourced; additions welcome via PR.
 */
const ENTRIES = [
  { date:"1798-07-14", dateText:"Jul 1798", person:"John Adams", role:"President", admin:"J. Adams", party:"Federalist", topic:"Free Speech", tag:"Overreach",
    summary:"Signed the Sedition Act; newspaper editors who criticized the government were fined and jailed. The backlash helped defeat him in 1800.",
    source:{ name:"National Constitution Center", url:"https://constitutioncenter.org/blog/how-the-alien-and-sedition-acts-almost-ruined-a-presidency" } },
  { date:"1804-07-11", dateText:"Jul 11, 1804", person:"Aaron Burr", role:"Vice President", admin:"Jefferson", party:"Dem.-Rep.", topic:"Violence", tag:"Scandal",
    summary:"The sitting Vice President killed Alexander Hamilton in a duel, then was later tried for treason (and acquitted).",
    source:{ name:"History.com", url:"https://www.history.com/articles/burr-hamilton-duel" } },
  { date:"1830-05-28", dateText:"May 28, 1830", person:"Andrew Jackson", role:"President", admin:"Jackson", party:"Democrat", topic:"Native Americans", tag:"Overreach",
    summary:"Signed the Indian Removal Act, forcing the deportation of Native nations along the “Trail of Tears”; thousands died.",
    source:{ name:"U.S. National Archives", url:"https://www.archives.gov/milestones/indian-removal-act" } },
  { date:"1875-05-01", dateText:"1875", person:"Orville E. Babcock", role:"Presidential Secretary", admin:"Grant", party:"Republican", topic:"Corruption", tag:"Scandal",
    summary:"The Whiskey Ring: federal officials — including Grant's own private secretary — skimmed millions in liquor taxes before being exposed.",
    source:{ name:"Britannica", url:"https://www.britannica.com/event/Whiskey-Ring" } },
  { date:"1915-03-21", dateText:"1913–1915", person:"Woodrow Wilson", role:"President", admin:"Wilson", party:"Democrat", topic:"Race", tag:"Overreach",
    summary:"Re-segregated the federal workforce and screened the pro-Klan film “The Birth of a Nation” at the White House.",
    source:{ name:"UVA Miller Center", url:"https://millercenter.org/president/wilson/impact-and-legacy" } },
  { date:"1922-04-07", dateText:"1921–1929", person:"Albert B. Fall", role:"Secretary of the Interior", admin:"Harding", party:"Republican", topic:"Corruption", tag:"Scandal",
    summary:"Teapot Dome: secretly leased Navy oil reserves for bribes, becoming the first U.S. cabinet member imprisoned for crimes committed in office.",
    source:{ name:"U.S. Senate", url:"https://www.senate.gov/artandhistory/history/minute/Senate_Investigates_the_Teapot_Dome_Scandal.htm" } },
  { date:"1942-02-19", dateText:"Feb 19, 1942", person:"Franklin D. Roosevelt", role:"President", admin:"F. Roosevelt", party:"Democrat", topic:"Civil Liberties", tag:"Overreach",
    summary:"Signed Executive Order 9066, interning ~120,000 Japanese Americans. Congress formally apologized and paid reparations in 1988.",
    source:{ name:"U.S. National Archives", url:"https://www.archives.gov/education/lessons/japanese-relocation" } },
  { date:"1960-05-07", dateText:"May 1960", person:"Dwight D. Eisenhower", role:"President", admin:"Eisenhower", party:"Republican", topic:"Foreign Policy", tag:"False",
    summary:"The administration claimed a downed U-2 was a lost “weather plane” — until the USSR produced the captured pilot, Francis Gary Powers.",
    source:{ name:"State Dept. Office of the Historian", url:"https://history.state.gov/milestones/1953-1960/u2-incident" } },
  { date:"1964-08-04", dateText:"Aug 1964", person:"Lyndon B. Johnson", role:"President", admin:"L. Johnson", party:"Democrat", topic:"War", tag:"Misleading",
    summary:"Used a disputed second Gulf of Tonkin “attack” — which likely never happened — to win open-ended war powers in Vietnam.",
    source:{ name:"State Dept. Office of the Historian", url:"https://history.state.gov/milestones/1961-1968/gulf-of-tonkin" } },
  { date:"1973-10-10", dateText:"Oct 10, 1973", person:"Spiro Agnew", role:"Vice President", admin:"Nixon", party:"Republican", topic:"Corruption", tag:"Scandal",
    summary:"Resigned the vice presidency and pleaded no contest to tax evasion tied to bribes he took as governor of Maryland.",
    source:{ name:"U.S. Senate", url:"https://www.senate.gov/about/officers-staff/vice-president/VP_Spiro_Agnew.htm" } },
  { date:"1973-11-17", dateText:"Nov 17, 1973", person:"Richard Nixon", role:"President", admin:"Nixon", party:"Republican", topic:"Watergate", tag:"False",
    summary:"“People have got to know whether or not their President is a crook. Well, I'm not a crook.” The tapes proved otherwise; he resigned in 1974.",
    source:{ name:"U.S. National Archives", url:"https://www.archives.gov/education/lessons/watergate-constitution" } },
  { date:"1974-09-08", dateText:"Sep 8, 1974", person:"Gerald R. Ford", role:"President", admin:"Ford", party:"Republican", topic:"Justice", tag:"Overreach",
    summary:"Granted Nixon a “full, free, and absolute pardon” before any charges — a move widely blamed for Ford's 1976 defeat.",
    source:{ name:"History.com", url:"https://www.history.com/this-day-in-history/ford-pardons-nixon" } },
  { date:"1984-08-11", dateText:"Aug 11, 1984", person:"Ronald Reagan", role:"President", admin:"Reagan", party:"Republican", topic:"Foreign Policy", tag:"Gaffe",
    summary:"Joked into a hot mic during a radio sound check: “My fellow Americans… the bombing begins in five minutes.” Soviet forces reportedly went briefly on alert.",
    source:{ name:"History.com", url:"https://www.history.com/this-day-in-history/august-11/reagan-jokes-about-bombing-russia" } },
  { date:"1987-03-04", dateText:"Mar 4, 1987", person:"Ronald Reagan", role:"President", admin:"Reagan", party:"Republican", topic:"Iran-Contra", tag:"Misleading",
    summary:"On Iran-Contra: “A few months ago I told the American people I did not trade arms for hostages… the facts and evidence tell me it is not [true].”",
    source:{ name:"UVA Miller Center", url:"https://millercenter.org/the-presidency/presidential-speeches/march-4-1987-address-nation-iran-contra" } },
  { date:"1986-11-25", dateText:"1985–1987", person:"Oliver North", role:"NSC Staff (Advisor)", admin:"Reagan", party:"Republican", topic:"Iran-Contra", tag:"Scandal",
    summary:"The NSC aide helped secretly sell arms to Iran and divert the profits to Nicaraguan Contras, then shredded documents. His convictions were later vacated.",
    source:{ name:"Britannica", url:"https://www.britannica.com/event/Iran-Contra-Affair" } },
  { date:"1990-06-26", dateText:"1988 → 1990", person:"George H. W. Bush", role:"President", admin:"G.H.W. Bush", party:"Republican", topic:"Taxes", tag:"Broken Promise",
    summary:"“Read my lips: no new taxes,” he pledged in 1988. As president he agreed to a 1990 tax increase — a reversal that haunted his re-election.",
    source:{ name:"UVA Miller Center", url:"https://millercenter.org/president/bush/campaigns-and-elections" } },
  { date:"1992-06-15", dateText:"Jun 15, 1992", person:"Dan Quayle", role:"Vice President", admin:"G.H.W. Bush", party:"Republican", topic:"Education", tag:"Gaffe",
    summary:"Corrected a student's correct spelling of “potato” to “potatoe” at a school spelling bee, cementing his reputation for gaffes.",
    source:{ name:"The Washington Post", url:"https://www.washingtonpost.com/archive/politics/1992/06/21/why-quayles-potatoe-gaffe-wont-fade/b7eecf20-d43f-4781-ab46-9a865df08b58/" } },
  { date:"1998-01-26", dateText:"Jan 26, 1998", person:"Bill Clinton", role:"President", admin:"Clinton", party:"Democrat", topic:"Personal Conduct", tag:"False",
    summary:"“I did not have sexual relations with that woman, Miss Lewinsky.” He later admitted an improper relationship and was impeached (then acquitted).",
    source:{ name:"UVA Miller Center", url:"https://millercenter.org/the-presidency/presidential-speeches/january-26-1998-response-lewinsky-allegations" } },
  { date:"2002-02-12", dateText:"Feb 12, 2002", person:"Donald Rumsfeld", role:"Secretary of Defense", admin:"G.W. Bush", party:"Republican", topic:"Iraq", tag:"Needs Context",
    summary:"Defended thin prewar intelligence with “there are known knowns… and unknown unknowns” — since a byword for wartime uncertainty.",
    source:{ name:"U.S. Dept. of Defense (transcript)", url:"https://archive.defense.gov/Transcripts/Transcript.aspx?TranscriptID=2636" } },
  { date:"2003-02-05", dateText:"Feb 5, 2003", person:"Colin Powell", role:"Secretary of State", admin:"G.W. Bush", party:"Republican", topic:"Iraq / WMD", tag:"False",
    summary:"Told the UN that Iraq had mobile bioweapons labs and hidden stockpiles. None were found; Powell later called the speech a “blot” on his record.",
    source:{ name:"NPR", url:"https://www.npr.org/2023/02/03/1151160567/colin-powell-iraq-un-weapons-mass-destruction" } },
  { date:"2003-05-01", dateText:"May 1, 2003", person:"George W. Bush", role:"President", admin:"G.W. Bush", party:"Republican", topic:"Iraq", tag:"Misleading",
    summary:"Declared major combat operations over beneath a “Mission Accomplished” banner. The Iraq war ground on for eight more years.",
    source:{ name:"UVA Miller Center", url:"https://millercenter.org/americas-war-in-iraq/mission-accomplished-moment" } },
  { date:"2006-02-11", dateText:"Feb 11, 2006", person:"Dick Cheney", role:"Vice President", admin:"G.W. Bush", party:"Republican", topic:"Personal Conduct", tag:"Scandal",
    summary:"Accidentally shot fellow hunter Harry Whittington in the face and chest with birdshot; the White House waited a day to disclose it.",
    source:{ name:"NPR", url:"https://www.npr.org/2023/02/07/1155073122/harry-whittington-obituary-dick-cheney-shot-texas" } },
  { date:"2013-11-04", dateText:"2013", person:"Barack Obama", role:"President", admin:"Obama", party:"Democrat", topic:"Health Care", tag:"Broken Promise",
    summary:"“If you like your health care plan, you can keep it.” Millions of plans were later canceled under the ACA; PolitiFact named it the 2013 “Lie of the Year.”",
    source:{ name:"PolitiFact", url:"https://www.politifact.com/article/2013/dec/12/lie-year-if-you-like-your-health-care-plan-keep-it/" } },
  { date:"2017-01-21", dateText:"Jan 21, 2017", person:"Sean Spicer", role:"White House Press Secretary", admin:"Trump I", party:"Republican", topic:"Press", tag:"False",
    summary:"In his first briefing, insisted Trump drew “the largest audience to ever witness an inauguration, period” — which photos disprove.",
    source:{ name:"PolitiFact", url:"https://www.politifact.com/factchecks/2017/jan/22/sean-spicer/sean-spicer-said-trump-had-largest-inauguration-cr/" } },
  { date:"2017-01-22", dateText:"Jan 22, 2017", person:"Kellyanne Conway", role:"Counselor to the President (Advisor)", admin:"Trump I", party:"Republican", topic:"Press", tag:"Misleading",
    summary:"Defended the false inauguration-crowd claim by saying the press secretary had offered “alternative facts” — a phrase that became cultural shorthand.",
    source:{ name:"PolitiFact", url:"https://www.politifact.com/factchecks/2017/jan/22/sean-spicer/sean-spicer-said-trump-had-largest-inauguration-cr/" } },
  { date:"2020-11-07", dateText:"Nov 2020 →", person:"Donald Trump", role:"President", admin:"Trump I", party:"Republican", topic:"Elections", tag:"False",
    summary:"Claimed the 2020 election was “rigged” and “stolen.” 60+ lawsuits failed, his own DOJ found no decisive fraud, and officials called it the most secure ever.",
    source:{ name:"Associated Press", url:"https://apnews.com/article/voter-fraud-election-2020-joe-biden-donald-trump-7fcb6f134e528fee8237c7601db3328f" } },
  { date:"2021-07-08", dateText:"Jul 8, 2021", person:"Joe Biden", role:"President", admin:"Biden", party:"Democrat", topic:"Foreign Policy", tag:"Needs Context",
    summary:"Said a Taliban takeover of Afghanistan was “highly unlikely.” Kabul fell about five weeks later amid a chaotic evacuation.",
    source:{ name:"NPR", url:"https://www.npr.org/2021/08/14/1027696241/biden-said-the-u-s-withdrawal-from-afghanistan-would-be-safe-then-chaos-ensued" } },
  { date:"2025-03-01", dateText:"2025", person:"Elon Musk", role:"Head of DOGE (Advisor)", admin:"Trump II", party:"—", topic:"Government Spending", tag:"Misleading",
    summary:"As head of DOGE, touted a “wall of receipts” claiming ~$180B in savings; reporters and budget experts found the verifiable total was a fraction of that.",
    source:{ name:"NPR", url:"https://www.npr.org/2025/03/01/nx-s1-5313853/doge-savings-receipts-musk-trump" } },
  { date:"2025-03-24", dateText:"Mar 2025", person:"Pete Hegseth", role:"Secretary of Defense", admin:"Trump II", party:"Republican", topic:"National Security", tag:"Scandal",
    summary:"“Signalgate”: detailed plans for imminent strikes in Yemen were shared in a Signal chat that accidentally included a journalist. A Pentagon watchdog later said it risked U.S. forces.",
    source:{ name:"CNN", url:"https://www.cnn.com/2025/03/26/politics/the-atlantic-publishes-signal-messages-yemen-strike" } },
  { date:"2025-04-10", dateText:"2025", person:"Donald Trump", role:"President", admin:"Trump II", party:"Republican", topic:"Economy", tag:"False",
    summary:"Claimed the U.S. was taking in “$2 billion a day” and “$88 billion in two months” from tariffs. Treasury data showed collections running well below both figures.",
    source:{ name:"PolitiFact", url:"https://www.politifact.com/factchecks/2025/apr/10/donald-trump/fact-check-trump-said-tariffs-collections-are-almo/" } },
  { date:"2025-09-22", dateText:"Sep 2025", person:"Robert F. Kennedy Jr.", role:"Secretary of Health & Human Services", admin:"Trump II", party:"—", topic:"Public Health", tag:"False",
    summary:"As HHS secretary, promoted a discredited link between vaccines/Tylenol and autism and reshaped federal vaccine panels, alarming public-health experts.",
    source:{ name:"PolitiFact", url:"https://www.politifact.com/article/2025/sep/23/autism-tylenol-announcement-vaccine-claims/" } }
];
