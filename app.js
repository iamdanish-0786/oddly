/**
 * Oddly Topic Generator App Logic - Optimized Ponytail Build
 */
const OFF_THE_CUFF_TOPICS = {
  politics: {
    easy: ["Voting in Elections", "Public Rules & Laws", "School Class Presidents", "Community Cleanups", "Freedom of Speech", "Town Mayor Responsibilities", "Peaceful Protests", "News & Newspaper Reports", "Paying Government Taxes", "School Debates", "Volunteering in Town", "Public Libraries", "City Parks & Playgrounds", "Street Lights & Safety", "Helping Your Neighbors"],
    medium: ["Social Media & Politics", "Whistleblowers in News", "Political Campaign Ads", "Single-Use Plastic Bans", "Public Bus & Train Rules", "Neighborhood Police Patrols", "Public Healthcare Access", "National Celebration Holidays", "Fake News on the Internet", "Animal Rights Laws", "Student Council Elections", "Minimum Wage Rates", "City Recycling Mandates", "Public Smoking Restrictions", "Government Transparency"],
    hard: ["Famous Civil Rights Leaders", "Voting Age Limits", "Free Speech on Social Media", "Term Limits for Leaders", "Celebrity Political Views", "National Borders & Customs", "Government Small Business Grants", "Neighborhood Safety Measures", "Protest & Rally Permits", "Taxation on Millionaires", "Public Camera Surveillance", "Disaster Relief Operations", "Digital Online Voting", "Foreign Aid Assistance", "Anti-Corruption Measures"]
  },
  history: {
    easy: ["The First Moon Landing", "World War II Stories", "Ancient Pyramids of Egypt", "The Invention of the Wheel", "The Titanic Maiden Voyage", "The First Airplane Flight", "Ancient Greek Olympics", "Medieval Castle Life", "The Discovery of Fire", "The Printing Press", "The American Revolution", "The Fall of Berlin Wall", "Dinosaur Extinction Era", "The Industrial Revolution", "Ancient Roman Colosseum"],
    medium: ["The California Gold Rush", "The Space Race Competition", "Knights & Feudal Times", "The Oregon Trail Journey", "The Great Depression", "Invention of the Telephone", "The Underground Railroad", "Viking Voyages & Ships", "Renaissance Painters & Art", "The Ancient Silk Road", "Building the Great Wall", "The Boston Tea Party", "Ancient Maya Empire", "The First Home Computers", "The Prohibition Era"],
    hard: ["Lessons from Past Wars", "Preserving Old Buildings", "History Written by Victors", "Historical Movies vs Facts", "Ancient Architecture Secrets", "Famous Historical Speeches", "Ancient Barter Systems", "Evolution of Paper Money", "Historical Statue Controversies", "Old World Explorers", "Changing Roles of Women", "Lost Ancient Cities", "Museum Cultural Artifacts", "Historical Pandemics Impact", "The Evolution of World Maps"]
  },
  financial: {
    easy: ["Saving Pocket Money", "Buying vs Renting a House", "Childhood Piggy Banks", "Credit Cards vs Cash", "Online Shopping Deals", "Supermarket Grocery Bills", "Shopping Mall Sales", "Tipping at Restaurants", "Paying Utility Bills", "Student Discount Cards", "Opening a Bank Account", "Monthly Family Budgeting", "Gift Cards & Vouchers", "Gasoline & Fuel Prices", "Emergency Rainy Day Fund"],
    medium: ["Side Hustles & Freelancing", "Investing Basics for Beginners", "Phone & Email Scams", "Buying Used vs New Cars", "Streaming Subscription Costs", "Cryptocurrency Buzz", "Impulse Buying Online", "Home Loans & Mortgages", "Student Loan Repayments", "Saving for Retirement", "Selling Old Items Online", "Brand Names vs Generic Items", "Part-Time Student Jobs", "Cost of Living Increases", "Bank Interest Rates"],
    hard: ["Passive Income Ideas", "Daily Price Inflation", "Minimalism & Smart Spending", "Asking for a Job Raise", "Real Estate House Flipping", "Stock Market Highs & Lows", "Salary Negotiation Tips", "Car & Health Insurance", "Financial Independence Goals", "Donating Money to Charity", "Income Tax Basics", "Building a Credit Score", "Company Benefits & Bonuses", "Digital Mobile Payments", "The Gig Economy Lifestyle"]
  },
  "ai-technology": {
    easy: ["Smartphones in Daily Life", "Voice Assistants (Siri & Alexa)", "Social Media Feed Suggestions", "Robot Vacuum Cleaners", "Face Unlock on Phones", "Autocorrect & Spell Check", "Video Games & Graphics", "GPS Maps & Navigation", "Smart Fitness Watches", "Customer Support Chatbots", "Streaming Movie Recommendations", "Home WiFi & Internet", "Digital Phone Cameras", "Video Calling Friends", "E-Readers vs Paper Books"],
    medium: ["AI Generated Art & Pictures", "Self-Driving Electric Cars", "Robots in Factory Jobs", "Screen Time & Phone Addiction", "Strong Password Security", "Package Delivery Drones", "Virtual Reality Headsets", "Smart Home Light Bulbs", "Language Translation Apps", "Spam Email Detection Filters", "Online Privacy & Data", "Automated Store Checkouts", "Social Media Photo Filters", "Cloud Photo Backup", "Computer Tech Support"],
    hard: ["AI Homework Assistance", "Deepfake Photos & Trust", "AI Ethics & Fairness", "Biometric Fingerprint Scanners", "Robots Helping in Hospitals", "Tech Company Data Collection", "Microchip Shortages", "Wearable Health Monitors", "AI Written Essays & Articles", "Future Flying Taxis", "Your Permanent Digital Footprint", "Algorithmic Ad Targeting", "Smart Kitchen Appliances", "Smartphone Over-Reliance", "Virtual Classrooms & Tech"]
  },
  education: {
    easy: ["School Homework Assignments", "School Uniforms Debate", "Favorite Class Subjects", "Online Video Lessons", "School Cafeteria Lunch", "Thanking Great Teachers", "Library Book Reading", "Group School Projects", "Summer Break Vacation", "Report Cards & Grades", "School Field Trips", "School Sports & Games", "Surprise Pop Quizzes", "Studying for Final Exams", "Classroom Rules & Behavior"],
    medium: ["Learning Apps & Games", "Learning Skills on YouTube", "Public vs Private Schools", "Stopping School Bullying", "College vs Vocational Trade", "Cheating & AI in School", "Student Mental Wellbeing", "Science Lab Experiments", "Art & Music Class Importance", "Physical Education & Fitness", "Homeschooling Advantages", "Exam Stress Management", "Flashcard Memory Tricks", "Outdoor Nature Classrooms", "After-School Study Groups"],
    hard: ["Lifelong Learning Habits", "Teaching Money Skills in School", "Practical Life Skills Education", "The Habit of Reading Books", "Teacher Salary & Respect", "Encouraging Girls in STEM", "Student Debt Relief Discussions", "Pass or Fail Grading Systems", "Creativity vs Rote Memorization", "Smartphones Allowed in Class", "Taking a Gap Year", "Free College Education Proposals", "Laptops Given to Students", "Special Needs Classroom Support", "Parental Involvement in School"]
  }
};

const DEEP_RESEARCH_TOPICS = {
  politics: {
    easy: ["Public Policy", "Bipartisanship", "Electoral Reform", "Voting Rights", "Town Hall Meetings", "Civic Engagement", "Political Parties", "Freedom of Speech", "Local City Councils", "Campaign Promises", "Public Debates", "Press Conferences", "Grassroots Movements", "Political Rallies"],
    medium: ["Digital Sovereignty", "Geopolitical Alliances", "Diplomatic Immunity", "Congressional Lobbying", "Sanctions and Embargoes", "Executive Orders", "Gerrymandering Effects", "Federalism vs Centralism", "Soft Power Diplomacy", "Judicial Independence", "Public Opinion Polling", "Coalition Governments", "Bureaucratic Inertia", "Campaign Finance Reform", "State of Emergency Powers"],
    hard: ["Constitutional Law", "Supranational Governance", "Hegemonic Stability", "Asymmetric Warfare Ethics", "Democratic Backsliding", "Post-Nationalism Dynamics", "Technocratic Governance", "Realpolitik vs Idealism", "Authoritarian Populism", "Extraterritorial Jurisdiction", "Nuclear Non-Proliferation", "Institutional Decay Models", "Sovereign Immunity Boundaries", "Cyber Sovereignty Treaties", "Unrecognized State Legitimacy"]
  },
  history: {
    easy: ["Ancient Egypt", "Roman Empire", "Greek Civilization", "Medieval Castles", "The Renaissance", "Industrial Revolution", "World War I", "World War II", "The Cold War", "Space Race", "Printing Press", "Ancient Silk Road", "Age of Exploration", "American Revolution", "French Revolution"],
    medium: ["Causes of French Revolution", "Fall of Roman Republic", "Rise of Ottoman Empire", "Gutenberg Literacy Impact", "Urbanization and Factories", "Colonial Trade Systems", "Causes of World War I", "Treaty of Versailles Negotiations", "Cuban Missile Crisis", "Post-WWII Decolonization", "Renaissance Humanism", "Protestant Reformation", "Maritime Exploration Advances", "Ancient Athenian Democracy", "Cold War Proxy Conflicts"],
    hard: ["Historical Inevitability", "Counterfactual History", "Imperial Economic Extraction", "Revolutionary Revisionism", "War Causes vs Triggers", "State Formation Legitimacy", "Historical Memory and Trauma", "Colonialism and Modern Institutions", "Technology Driving Politics", "Long-Term Industrial Impact", "Competing Cold War Views", "Historical Causality Models", "Generational Responsibility", "Civilization Collapse Theories", "Historiographical Bias"]
  },
  financial: {
    easy: ["Venture Capital", "Inflation Dynamics", "Global Supply Chains", "Personal Budgeting", "Stock Market Basics", "Interest Rates", "Credit Scores", "Real Estate Investing", "Cryptocurrency Basics", "Savings Accounts", "Mutual Funds", "E-Commerce Growth", "Consumer Debt", "Tax Return Basics", "Emergency Funds"],
    medium: ["Central Bank Digital Currencies", "Algorithmic Trading", "Sovereign Debt Crises", "Mergers and Acquisitions", "Derivative Securities", "Corporate Bond Yields", "Foreign Exchange Volatility", "Hedge Fund Strategies", "Macroeconomic Indicators", "Supply-Side Economics", "Monetary Policy Transmission", "Microfinance Models", "Private Equity Buyouts", "Asset Allocation Models", "Stagflation Risk Factors"],
    hard: ["Decentralized Finance", "Quantitative Easing Unwinding", "Credit Default Swaps Structuring", "Arbitrage Pricing Theory", "Yield Curve Inversion Models", "Shadow Banking Systemic Risk", "Behavioral Finance Anomalies", "Collateralized Debt Obligations", "Petrodollar Recycling Dynamics", "Black-Scholes Option Valuation", "De-Dollarization of Reserves", "High-Frequency Market Structure", "Cross-Border Capital Flight", "Pension Fund Solvency Crises", "Moral Hazard in Bailouts"]
  },
  "ai-technology": {
    easy: ["Autonomous Robotics", "Synthetic Media", "Generative Agents", "Voice Assistants", "Self-Driving Cars", "Facial Recognition", "Smart Home Automation", "Chatbot Interfaces", "Algorithm Recommendations", "Image Generation Tools", "Drones and Logistics", "Computer Vision Basics", "Automated Translation", "Spam Detection Filters", "Wearable Fitness Tech"],
    medium: ["Neural Architecture Search", "AI Safety Frameworks", "Brain-Computer Interfaces", "Reinforcement Learning RLHF", "Computer Vision Healthcare", "Natural Language Understanding", "Edge Computing AI Models", "Algorithmic Bias Mitigation", "Explainable AI XAI", "Automated Code Generation", "Predictive Analytics Models", "AI Copyright and IP Rights", "Synthetic Data Generation", "Quantum Computing Fundamentals", "Robotic Process Automation"],
    hard: ["Quantum Supremacy Algorithms", "Neuromorphic Computing", "Superalignment Safety Protocols", "Transformer Attention Scaling", "AGI Timeline Projections", "Emergent Model Abilities", "AI Autonomous Weaponry", "Model Collapse in Training", "Formal Verification of AI", "Sub-Symbolic Reasoning", "Mechanistic Interpretability", "Quantum Error Thresholds", "Post-Quantum Cryptography", "Recursive Reward Modeling", "Biocultural Impact of AGI"]
  },
  education: {
    easy: ["Gamified Learning", "Lifelong Upskilling", "EdTech Integration", "Online Video Courses", "Flashcard Study Apps", "School Curriculum Basics", "Group Project Dynamics", "Standardized Testing", "Library Access and Literacy", "Teacher Mentorship", "Language Immersion", "Outdoor Experiential Learning", "Peer Tutoring Systems", "Digital Homework Platforms", "Parent-Teacher Engagement"],
    medium: ["Socratic Method in Classrooms", "Open Access Publications", "Adaptive Learning Curricula", "Project-Based Assessment", "Flipped Classroom Pedagogy", "Neurodiversity in Education", "STEM vs STEAM Disciplines", "Vocational Training Models", "Early Literacy Pedagogy", "Competency-Based Learning", "Education Inequality Gap", "Blended Learning Frameworks", "Micro-Credentialing Systems", "Critical Media Literacy", "Student Financial Debt Reform"],
    hard: ["Critical Pedagogy Power Structures", "Epistemological Curricula Frameworks", "Cognitive Apprenticeship Paradigms", "Deschooling Society Critiques", "Constructivist vs Behaviorist Learning", "Vygotsky Sociocultural Theory", "Metrics Inflation in Research", "Decolonizing Academic Knowledge", "Cognitive Load Theory Design", "Metacognitive Development Protocols", "Gamification Intrinsic Motivation", "Higher Ed Neoliberal Restructuring", "Universal Design Learning Limits", "Algorithmic Proctoring Ethics", "Heutagogy Self-Determined Learning"]
  }
};

const CATEGORY_NAMES = { politics: 'Politics', history: 'History', financial: 'Financial', 'ai-technology': 'AI Tech', education: 'Education' };
const DURATION_VALUES = [1, 2, 3, 5, 10];

const inMemoryStore = {
  settings: { speechDuration: 1, researchDuration: 1, isSoundMuted: false },
  difficulty: 'medium',
  streak: 3,
  spinCount: 0,
  historyOffTheCuff: [],
  historyDeepResearch: []
};

function parseSavedSettings() {
  return inMemoryStore.settings;
}

function saveSettings(s) {
  inMemoryStore.settings = { ...s };
}

const settingsState = parseSavedSettings();

function generateSubtopic({ category, difficulty, previousSubtopic, recentSubtopicsMap, mode = 'off-the-cuff' }) {
  const ds = mode === 'deep-research' ? DEEP_RESEARCH_TOPICS : OFF_THE_CUFF_TOPICS;
  const pool = (ds[category] || ds.politics)[difficulty] || [];
  if (!pool.length) return "Voting in Elections";
  const key = `${mode}_${category}_${difficulty}`;
  const recent = recentSubtopicsMap[key] || [];
  let cand = pool.filter(x => x !== previousSubtopic && !recent.includes(x));
  if (!cand.length) cand = pool.filter(x => x !== previousSubtopic);
  if (!cand.length) cand = pool;
  const sel = cand[Math.floor(Math.random() * cand.length)];
  recentSubtopicsMap[key] = [sel, ...recent.filter(x => x !== sel)].slice(0, 7);
  return sel;
}

const SOUND_TICK = "data:audio/wav;base64,UklGRm4BAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YUoBAACAkJ+rsbGsoZODcmNXUE9TXGp5ipmlrK+spJeIeWpdVVJUW2Z0g5KfqKyrpZuNf3BjWlVVWmNwfoyZoqippZ2RhHZpX1lXWmFseYaTnaSmpJ6UiHtvZV1aW2FpdYGNmJ+jo56XjIB0amJeXWFocX2IkpqfoZ6Yj4R5b2diYGJnb3mDjZabnp2YkYh+dGxmY2NnbnZ/iZGXmpuYkoqBeHBqZmZobXR8hY2Tl5iWkoyEfHRuamhpbXN6gYmPk5WVko2Gf3hybmtrbnJ4f4WLkJKSkY2IgXt2cW9ub3J3fYKIjI+Qj4yIg355dXJxcXN3e4CFiYuNjYuIhIB8eHV0dHV3e3+ChoiKiomHhIF+e3h3dnd5e36Bg4WHh4eGhIF/fXt6eXl6fH5/gYOEhISEg4GAfn18fHx9fX5/gIGBgoKBgYCAf39/f39/f38=";
const SOUND_RESULT = "data:audio/wav;base64,UklGRpkGAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YXUGAACAnrW/uaWIaU9CQ1Rvjqq7vbGYeVxHQUpgfpyzvrmmiWtRQ0RTboyoub2xmXteSUJKX3yasby5p4ttU0REU2yKpri8sZp9YEtDSl56mLC7uKeNb1VGRVJriaS2u7GbfmJMREpdeZauuriojnFXR0VSaoeitbqynIBkTkVKXHeUrLm4qI9yWUlGUmiFoLO6sp2CZlBGSlx2kqq4t6mRdFtKR1Fng56yubKeg2hSR0pbdJCotrepknZcS0dRZoKcsLixn4VpU0hLWnOPp7W2qpN4Xk1IUWWAmq63saCGa1VKS1pyjaWztaqUeWBPSVFkfpmttrGgiG1XS0xZcIujsrWqlXtiUEpRZH2Xq7SxoYlvWUxMWW+JobG0qpZ9ZFJLUWN7lamzsKKKcFpNTVluiJ+vs6qXfmVTTFFiepOosrCijHJcT01YbYaerrKqmIBnVU1SYXmSprGwoo10XlBOWGyFnKyxqpmBaVZOUmF3kKSwr6OOdV9RT1hrg5qrsKqZgmtYT1Jgdo6jrq+jj3dhU1BYaoKZqa+qmoRsWlBTYHWNoa2uo5B4Y1RQWGqAl6iuqpuFbltRU2B0i5+sraORemRWUVhpf5Wmrambhm9dU1Rfc4qeqqyjkntmV1JYaH6UpaypnIdxXlRUX3KInKmso5J9aFlTWWh8kqOrqZyIcmBVVV9xh5uoq6OTfmlaVFlne5GiqqiciXRhVlVfcIWZpqqjlH9rXFVZZ3qPoKmonYp1Y1hWX3CEmKWpo5SAbF1WWmZ5jp+op52Ld2VZV19vg5akqKOVgm5eV1pmeIydp6adjHhmWlhfboKVoqejlYNvYFhaZneLnKWmnY15aFxZX26Ak6GmopaEcWFZW2V2iZqkpZ2Ne2ldWV9tf5KfpaKWhXJjW1xldoiZo6SdjnxqXlpgbX6QnqShloZzZFxcZXWHl6KknY99bGBbYGx9j52joZaGdWZdXWV0hpago5yPfm1hXGBsfI6boqCXh3ZnXl5ldIWUn6KckH9vYl1hbHyMmqGgl4h3aF9eZXOEk56hnJCAcGReYWt7i5mgn5eJeGphX2ZygpKcoJyQgXFlX2JreoqXn56XiXlrYmBmcoGQm5+bkYJyZmBia3mJlp6el4p6bGNhZnKBj5qem5GCdGhhY2t5iJWcnZaKe25kYmZxgI6ZnZqRg3VpY2NreIeTm5yWi3xvZWNncX+Nl5yakYR2amRka3eGkpqblot9cGdjZ3F+jJabmZGFd2tlZWt3hZGZm5aLfnFoZGhxfYuVmpmRhXhtZmZsd4SQmJqVjH9yaWVocX2JlJmYkYZ5bmdmbHaDjpaZlYyAc2pmaXF8iJKYl5GGem9oZ2x2go2VmJSMgHVsZ2lxfIeRl5eRhntwaWhtdoGMlJeUjIF2bWhqcXuGkJaWkId8cWppbXWAi5OWk4yCd25qa3F7ho+VlZCHfHJsam11gIqSlZOMgnhva2txeoWOlJSQh31zbWtudX+JkZSSjIB4cGxscXqEjZKTj4d+dG5sbnV/iJCTkoyDeXFtbXJ6g4yRko+IfnVvbW91foeOkpGMg3pybm5yeYOLkJKOiH92cG5wdX6GjZGQi4R7c29ucnmCio+Rjoh/d3FvcHZ9hoyQj4uEfHRwb3N5gYmOkI2IgHhycHF2fYWLj4+LhHx1cXBzeYGIjY+Nh4B5c3Fydn2Eio6OioR9dnJxdHmAh4yOjIeBenRycnZ9g4mNjYqEfXdzcnR5gIaLjYuHgXp1c3N3fIOIjIyJhH54dHN1eX+FioyLh4F7dnR0d3yCh4uLiYR+eXV0dnp/hYmLioeBfHd1dXh8goeKioiEf3p2dXZ6f4SIiomGgnx4dnZ4fIGGiYmIhH96d3Z3en+Dh4mIhoJ9eXd2eXyBhYiIh4R/e3h3eHp+g4aIiIWCfXp4d3l8gISHiIaDgHx5eHh7foKFh4eFgn57eXh6fYCDhoeGg4B8enl5e36ChIaGhIF+e3p5en2Ag4WGhYOAfXt6enx+gYSFhYSBf3x7ent9gIKEhYSCgH58e3t8foGDhISDgX99e3t8fYCCg4SDgoB+fHx8fX+AgoODgoF/fXx8fX5/gYKDgoGAfn19fX1/gIGCgoKBf359fX1+f4GBgoKBgH9+fn5+f4CBgYGBgH9+fn5+f3+AgYGBgIB/f35+f3+AgICAgIB/f39/f39/gICAgICAf39/f38=";
const SOUND_FINISH = "data:audio/wav;base64,UklGRg8NAABXQVZFZm10IBAAAAABAAEAESsAABErAAABAAgAZGF0YesMAACAlqq7xsvKwrShjHVfTT42NDhDU2h+lKi5xcvKwrWjjXdhTkA3NDhDUmZ8kqe4xMrKw7akj3ljUEE4NThCUWR6kKW2w8nJw7alkXtlUkM5NThBUGN4jqO1wcnJw7enknxnU0Q6NjhBT2J3jaGzwMjJw7iolH5pVUU7NjhATmB1i6Cxv8fIxLmplYBrV0c8NzhATV9ziZ6wvsbIxLmql4JsWUg9ODg/TF1yh5yuvMXIxLqrmINuWko+ODk/S1xwhZqtu8THxLusmoVwXEs/OTk/S1tvhJirusPHxLutm4dyXk1BOjk/SlptgpepuMLGxLyunYhzYE5COjk+SVlsgJWot8HGxLyvnop1YVBDOzo+SFdqf5OmtcDFxL2wn4x3Y1JEPDo+SFZpfZGktL/ExL2xoI15ZVNGPTo+R1Vne5Cjsr7Ew72yoo96ZlVHPjs+R1Rmeo6hsb3Dw76yo5B8aFZIPzs+RlNleIyfr7vCw76zpJJ+anshKQDw+RlNjd4uerrrBw760ppSBbVtMQj0+RVJidYmcrLnAwr60ppSBbVtMQj0+RVFhdIeaq7jAwr61p5aCb11OQz4+RVBgcoaZqbe/wb61qJeEcF5PRD8/RE9fcYSXqLW+wb62qZiFcmBRRT8/RE9db4KVprS9wL62qpqHdGJSR0A/RE5cboGUpbO8wL63q5uIdWNTSEFARE1bbX+So7G7v763q5yKd2VVSUJARE1aa36RorC6v763rJ2LeGZWSkNARExZanyPoK+5vr64rZ6NemhYS0NBRExZaXuNn624vb24rp+OfGlZTURBREtYaHmMnay3vb24rqCPfWtbTkVCREtXZniKnKq1vL24r6GRf21cT0ZCREtWZXeJmqm0u7y4r6KSgG5eUEdDREpVZHWHmaizury4sKOTgXBfUkhEREpVY3SGl6ayuby4sKSUg3FhU0lEREpUYnOElqWxuLu4saWVhHNiVEpFRUpTYXGDlKOwuLu4saaXhnRkVktGRUpTYHCBk6Kut7q4saaYh3ZlV0xGRUlSX2+AkaGttrm4sqeZiHdnWE5HRklSXm5/kJ+stbm4sqiainloWk9IRklRXW19jp6rtLi4sqibe3pqW1BJR0lRXWt8jZyps7i3sqmcjHtrXFFKR0lRXGp7i5uosre3s6mdjX1sXlJLSEpQW2l5ipmnsba3s6qejn5uX1NLSEpQW2h4iJimsLW2s6qekH9vYVVMSUpQWmd3h5ekr7W2s6ufkYFxYlZNSUpQWWZ2hpWjrbS2s6ugkoJyY1dOSkpPWWV0hJSirLO1s6yhk4NzZVhPS0tPWGVzg5Ogq7K1s6yhlIR1ZllQS0tPWGRygpGfqrG0sqyilYZ2Z1tRTEtPV2NxgZCeqbC0sqyjlod3aVxSTUxPV2Jwf4+cqLCzsq2jl4h5al1TTUxPVmFvfo2bp6+zsq2kl4l6a15UTkxPVmFufYyapa6ysq2kmIp7bWBVT01PVmBtfIuZpK2xsa2lmYt8bmFXUE1PVl9seomXo6yxsa2lmox+b2JYUU5QVV9reYiWoquwsa2mm41/cGNZUk5QVV5qeIeVoaqvsK2mm46AcmVaUk9QVV5qd4aToKmusK2mnI+Bc2ZbU1BQVV1pdoSSnqiur62nnZCCdGdcVFBQVV1odbORnaetr62nnZGDdWhdVVFRVVxndIKQnKasrq2nnpKEd2peVlJRVVxnc4GPm6Wrrq2nnpOGeGtgV1JRVVxmcoCNmqSqraynn5SHeWxhWFNSVVtlcX+MmKKpraynn5SIem1iWVRSVVtlcH6Ll6GprKynoJWJe25jWlVTVVtkcH2KlqCorKuooJaJfG9kW1VTVVtkb3yJlZ+nq6uooJaKfXFlXFZUVVtjbnuIlJ6mqquooZeLfnJmXVdUVVpjbXqGk52lqqqnoZiMgHNnXlhVVlpibXmFkZykqaqnoZiNgXRXl1lVVlpibHiEkJujqKqnoZmOgnVqYFlWVlpha3eDj5qip6mnopmPgnZrYVpXV1pha3aCjpmhp6mnopqPg3dsYltXV1phanWBjZigpqinopqQhHhtY1xYV1pgaXSAjJefpainopuRhXluZF1ZWFpgaXR/i5aepKemopuRhnpvZV5ZWFpgaHN+ipWdo6amopuSh3twZl9aWVtgaHJ9iZOco6amopySiHxxZ2BbWVtgaHF8iJKboqWlopyTiX1yaGFbWltgZ3F8h5GaoaWlopyUiX5zaWFcWltgZ3B7hpCZoKSlopyUin90amJdW1tgZnB6hY+Yn6OkopyUi4B1a2NeW1xgZm95hI6XnqOkop2Vi4F2bGRfXFxgZm54g42WnqKjoZ2VjIJ3bWVfXFxgZm54goyWnaGjoZ2WjYJ4bmZgXV1gZW13gYuVnKCioZ2WjYN5b2dhXl1gZW12gIuUm6CioZ2WjoR6cGhiXl5gZW12gIqTmp+hoJ2XjoV7cWljX15gZWx1f4mSmZ6hoJ2Xj4V8cmpjYF5gZWx0foiRmJ2goJ2Xj4Z8c2tkYF9gZWt0fYeQl52gn52XkId9dGxlYV9hZWtzfYaPlpyfn52XkId+dW1mYmBhZWtzfIWOlpuen5yYkYh/dm1nYmBhZWtye4SNlZqenpyYkYmAd25oY2FiZWpye4SMlJqdnpyYkYmAd29oZGFiZWpxeoOLk5mcnZyYkYqBeHBqZmZobXR8hY2Tl5iWkoyEfHRuamhpbXN6gYmPk5WVko2Gf3hybmtrbnJ4f4WLkJKSkY2IgXt2cW9ub3J3fYKIjI+Qj4yIg355dXJxcXN3e4CFiYuNjYuIhIB8eHV0dHV3e3+ChoiKiomHhIF+e3h3dnd5e36Bg4WHh4eGhIF/fXt6eXl6fH5/gYOEhISEg4GAfn18fHx9fX5/gIGBgoKBgYCAf39/f39/f38=";

function playAudioEl(id, vol = 0.8) {
  try {
    const el = document.getElementById(id);
    if (el) {
      el.volume = vol;
      el.currentTime = 0;
      const p = el.play();
      if (p && p.catch) p.catch(() => {});
    }
  } catch (e) {}
}

function unlockAudioElements() {
  ['audio-tick', 'audio-result', 'audio-finish'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      const p = el.play();
      if (p && p.then) {
        p.then(() => { el.pause(); el.currentTime = 0; }).catch(() => {});
      }
    }
  });
}

const audioService = {
  playSpinStartSound() { playAudioEl('audio-tick', 0.5); },
  playSpinTickSound() { playAudioEl('audio-tick', 0.3); },
  playResultSound() { playAudioEl('audio-result', 0.8); },
  playTimerStartSound() { playAudioEl('audio-tick', 0.5); },
  playTimerTickSound() { playAudioEl('audio-tick', 0.3); },
  playTimerFinishedSound() { playAudioEl('audio-finish', 1.0); }
};

document.addEventListener('click', unlockAudioElements, { passive: true });

document.addEventListener('DOMContentLoaded', () => {

  const mainTopicDisplay = document.getElementById('main-topic-display');
  const spinBtn = document.getElementById('spin-btn');
  const timerBtn = document.getElementById('timer-btn');
  const modeBtns = document.querySelectorAll('.mode-btn');
  const categoryBtns = document.querySelectorAll('.category-btn');
  const streakBadge = document.getElementById('streak-badge');
  const soundToggleSwitch = document.getElementById('sound-toggle-switch');
  const difficultyBtns = document.querySelectorAll('.difficulty-btn');
  const topicHistoryList = document.getElementById('topic-history-list');
  const clearHistoryBtn = document.getElementById('clear-history-btn');

  const settingsBtn = document.getElementById('settings-btn');
  const settingsOverlay = document.getElementById('settings-overlay');
  const settingsCloseBtn = document.getElementById('settings-close-btn');
  const speechSlider = document.getElementById('speech-duration-slider');
  const speechDurationVal = document.getElementById('speech-duration-val');
  const researchSlider = document.getElementById('research-duration-slider');
  const researchDurationVal = document.getElementById('research-duration-val');
  const settingsMuteCheckbox = document.getElementById('settings-mute-checkbox');

  const timerView = document.getElementById('timer-view');
  const timerFocusLabel = document.getElementById('timer-focus-label');
  const timerTopicTitle = document.getElementById('timer-topic-title');
  const timerModeBadge = document.getElementById('timer-mode-badge');
  const timerCountdownText = document.getElementById('timer-countdown-text');
  const timerRingBar = document.getElementById('timer-ring-bar');
  const timerPauseBtn = document.getElementById('timer-pause-btn');
  const timerNextPhaseBtn = document.getElementById('timer-next-phase-btn');
  const timerResetBtn = document.getElementById('timer-reset-btn');
  const timerExitBtn = document.getElementById('timer-exit-btn');

  const state = {
    selectedMode: 'off-the-cuff',
    selectedCategory: 'politics',
    selectedDifficulty: inMemoryStore.difficulty || 'medium',
    currentSubtopic: 'Voting in Elections',
    isSpinning: false,
    streak: inMemoryStore.streak || 3,
    spinCount: inMemoryStore.spinCount || 0,
    soundEnabled: !settingsState.isSoundMuted,
    recentSubtopics: {}
  };

  const timerViewState = { active: false, durationSeconds: 60, remainingSeconds: 60, isPaused: false, intervalId: null };
  const RING_CIRCUMFERENCE = 678.58;

  if (streakBadge) streakBadge.textContent = state.streak;

  function updateHomepageTimerButtonLabel() {
    if (!timerBtn) return;
    timerBtn.textContent = state.selectedMode === 'deep-research' ? `Start ${settingsState.researchDuration || 1} min research` : `Start 1 min timer`;
  }

  function syncSettingsUI() {
    const spIdx = DURATION_VALUES.indexOf(settingsState.speechDuration);
    if (speechSlider) speechSlider.value = spIdx >= 0 ? spIdx : 0;
    if (speechDurationVal) speechDurationVal.textContent = `${settingsState.speechDuration} min`;
    const resIdx = DURATION_VALUES.indexOf(settingsState.researchDuration);
    if (researchSlider) researchSlider.value = resIdx >= 0 ? resIdx : 0;
    if (researchDurationVal) researchDurationVal.textContent = `${settingsState.researchDuration} min`;
    if (settingsMuteCheckbox) settingsMuteCheckbox.checked = settingsState.isSoundMuted;
    if (soundToggleSwitch) soundToggleSwitch.classList.toggle('active', !settingsState.isSoundMuted);
    updateHomepageTimerButtonLabel();
  }

  syncSettingsUI();

  if (speechSlider) {
    speechSlider.addEventListener('input', (e) => {
      settingsState.speechDuration = DURATION_VALUES[parseInt(e.target.value, 10)] || 1;
      if (speechDurationVal) speechDurationVal.textContent = `${settingsState.speechDuration} min`;
      saveSettings(settingsState);
      updateHomepageTimerButtonLabel();
    });
  }

  if (researchSlider) {
    researchSlider.addEventListener('input', (e) => {
      settingsState.researchDuration = DURATION_VALUES[parseInt(e.target.value, 10)] || 1;
      if (researchDurationVal) researchDurationVal.textContent = `${settingsState.researchDuration} min`;
      saveSettings(settingsState);
      updateHomepageTimerButtonLabel();
    });
  }

  const soundPill = document.querySelector('.sound-pill');
  const toggleSound = (e) => {
    if (e) e.stopPropagation();
    state.soundEnabled = !state.soundEnabled;
    settingsState.isSoundMuted = !state.soundEnabled;
    if (soundToggleSwitch) soundToggleSwitch.classList.toggle('active', state.soundEnabled);
    if (settingsMuteCheckbox) settingsMuteCheckbox.checked = settingsState.isSoundMuted;
    saveSettings(settingsState);
    if (state.soundEnabled) audioService.playTimerStartSound();
  };

  if (soundPill) soundPill.addEventListener('click', toggleSound);
  if (settingsMuteCheckbox) {
    settingsMuteCheckbox.addEventListener('change', () => {
      state.soundEnabled = !settingsMuteCheckbox.checked;
      settingsState.isSoundMuted = settingsMuteCheckbox.checked;
      if (soundToggleSwitch) soundToggleSwitch.classList.toggle('active', state.soundEnabled);
      saveSettings(settingsState);
    });
  }

  const toggleSettings = (open) => {
    if (!settingsOverlay) return;
    settingsOverlay.classList.toggle('open', open);
    settingsOverlay.setAttribute('aria-hidden', (!open).toString());
  };

  if (settingsBtn) settingsBtn.addEventListener('click', () => toggleSettings(!settingsOverlay?.classList.contains('open')));
  if (settingsCloseBtn) settingsCloseBtn.addEventListener('click', () => toggleSettings(false));
  if (settingsOverlay) settingsOverlay.addEventListener('click', (e) => { if (e.target === settingsOverlay) toggleSettings(false); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') toggleSettings(false); });

  function formatTimeWindow(sec) {
    const m = Math.floor(sec / 60), s = sec % 60;
    return m > 0 ? `${m}m ${s > 0 ? s + 's' : ''}`.trim() : `${s}s`;
  }

  function updateSpeakingRoadmapUI(topicName, durationSeconds = 60, mode = 'off-the-cuff') {
    const roadmapList = document.getElementById('roadmap-tasks-list');
    if (!roadmapList) return;
    const tName = topicName || 'your topic';
    let tasks = [];
    if (mode === 'deep-research') {
      const t = [0, Math.round(durationSeconds * 0.1), Math.round(durationSeconds * 0.35), Math.round(durationSeconds * 0.6), Math.round(durationSeconds * 0.85), durationSeconds];
      tasks = [
        { step: 1, title: `1. Introduction`, timeRange: `0s – ${formatTimeWindow(t[1])}`, desc: `State ${tName} and introduce main thesis.` },
        { step: 2, title: `2. Point 1: Claim & Proof`, timeRange: `${formatTimeWindow(t[1])} – ${formatTimeWindow(t[2])}`, desc: `Present first key argument for ${tName}.` },
        { step: 3, title: `3. Point 2: Claim & Proof`, timeRange: `${formatTimeWindow(t[2])} – ${formatTimeWindow(t[3])}`, desc: `Present second argument or counter-view.` },
        { step: 4, title: `4. Real Examples & Data`, timeRange: `${formatTimeWindow(t[3])} – ${formatTimeWindow(t[4])}`, desc: `Illustrate with specific examples or facts.` },
        { step: 5, title: `5. Conclusion`, timeRange: `${formatTimeWindow(t[4])} – ${formatTimeWindow(t[5])}`, desc: `Summarize key findings and deliver final verdict.` }
      ];
    } else {
      const q = Math.max(Math.floor(durationSeconds / 4), 1);
      tasks = [
        { step: 1, title: `1. What is ${tName}?`, timeRange: `0s – ${formatTimeWindow(q)}`, desc: `Explain what ${tName} means simply.` },
        { step: 2, title: `2. Why does it matter?`, timeRange: `${formatTimeWindow(q)} – ${formatTimeWindow(q * 2)}`, desc: `Why is ${tName} important?` },
        { step: 3, title: `3. Give a real example`, timeRange: `${formatTimeWindow(q * 2)} – ${formatTimeWindow(q * 3)}`, desc: `Share a simple story or example of ${tName}.` },
        { step: 4, title: `4. Wrap it up`, timeRange: `${formatTimeWindow(q * 3)} – ${formatTimeWindow(durationSeconds)}`, desc: `Summarize your main point and conclude.` }
      ];
    }

    roadmapList.innerHTML = tasks.map(t => `
      <li class="roadmap-task-item" data-step="${t.step}">
        <div class="roadmap-task-step">${t.step}</div>
        <div class="roadmap-task-content">
          <div class="roadmap-task-header-row"><span class="roadmap-task-header">${escapeHtml(t.title)}</span><span class="roadmap-time-badge">${escapeHtml(t.timeRange)}</span></div>
          <div class="roadmap-task-desc">${escapeHtml(t.desc)}</div>
        </div>
      </li>
    `).join('');

    roadmapList.querySelectorAll('.roadmap-task-item').forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('completed');
        if (state.soundEnabled) audioService.playTimerStartSound();
      });
    });
  }

  function updateSpeakingRoadmapProgress() {
    const roadmapList = document.getElementById('roadmap-tasks-list');
    if (!roadmapList || timerViewState.phase !== 'speaking') return;
    const totalSecs = timerViewState.durationSeconds;
    if (totalSecs <= 0) return;
    const elapsed = totalSecs - Math.max(timerViewState.remainingSeconds, 0);
    const ratio = Math.min(elapsed / totalSecs, 1);
    let cur = 1;
    if (state.selectedMode === 'deep-research') {
      if (ratio >= 0.85) cur = 5;
      else if (ratio >= 0.60) cur = 4;
      else if (ratio >= 0.35) cur = 3;
      else if (ratio >= 0.10) cur = 2;
      if (timerViewState.remainingSeconds <= 0) cur = 6;
    } else {
      cur = Math.floor(ratio * 4) + 1;
      if (cur > 4 || timerViewState.remainingSeconds <= 0) cur = 5;
    }
    roadmapList.querySelectorAll('.roadmap-task-item').forEach(item => {
      const step = parseInt(item.getAttribute('data-step'), 10);
      if (step < cur) { item.classList.add('completed'); item.classList.remove('active-step'); }
      else if (step === cur && timerViewState.remainingSeconds > 0) { item.classList.remove('completed'); item.classList.add('active-step'); }
      else { item.classList.remove('completed', 'active-step'); }
    });
  }

  function updateTimerDisplayUI() {
    const m = Math.floor(timerViewState.remainingSeconds / 60), s = timerViewState.remainingSeconds % 60;
    if (timerCountdownText) timerCountdownText.textContent = timerViewState.remainingSeconds <= 0 ? "Time's up!" : `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    if (timerRingBar && timerViewState.durationSeconds > 0) {
      timerRingBar.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - Math.max(timerViewState.remainingSeconds / timerViewState.durationSeconds, 0));
    }
    updateSpeakingRoadmapProgress();
  }

  function startTimerCountdown() {
    clearInterval(timerViewState.intervalId);
    timerViewState.intervalId = setInterval(() => {
      if (timerViewState.isPaused) return;
      timerViewState.remainingSeconds--;
      updateTimerDisplayUI();
      if (timerViewState.remainingSeconds > 0) {
        if (state.soundEnabled) audioService.playTimerTickSound(timerViewState.remainingSeconds <= 3);
      } else {
        clearInterval(timerViewState.intervalId);
        timerViewState.intervalId = null;
        if (state.selectedMode === 'deep-research' && timerViewState.phase === 'research') {
          if (state.soundEnabled) audioService.playTimerFinishedSound();
          setTimeout(startSpeakingPhaseInDeepResearch, 600);
        } else if (state.soundEnabled) {
          audioService.playTimerFinishedSound();
        }
      }
    }, 1000);
  }

  function startSpeakingPhaseInDeepResearch() {
    clearInterval(timerViewState.intervalId);
    timerViewState.phase = 'speaking';
    const spMins = settingsState.speechDuration;
    timerViewState.durationSeconds = spMins * 60;
    timerViewState.remainingSeconds = spMins * 60;
    timerViewState.isPaused = false;
    if (timerFocusLabel) timerFocusLabel.textContent = 'SPEAKING PHASE';
    if (timerModeBadge) timerModeBadge.textContent = `Deep research • Phase 2: Speaking (${spMins} min)`;
    if (timerNextPhaseBtn) timerNextPhaseBtn.style.display = 'none';
    const roadmapPanel = document.getElementById('speech-roadmap-panel');
    if (roadmapPanel) roadmapPanel.style.display = 'flex';
    updateSpeakingRoadmapUI(state.currentSubtopic, timerViewState.durationSeconds, 'deep-research');

    if (timerPauseBtn) {
      const pText = document.getElementById('timer-pause-text');
      if (pText) pText.textContent = 'Pause';
    }
    if (state.soundEnabled) audioService.playTimerStartSound();
    updateTimerDisplayUI();
    startTimerCountdown();
  }

  function enterTimerView() {
    if (state.isSpinning || timerViewState.active) return;
    if (state.soundEnabled) audioService.playTimerStartSound();
    if (timerTopicTitle) timerTopicTitle.textContent = state.currentSubtopic;

    const roadmapPanel = document.getElementById('speech-roadmap-panel');
    if (state.selectedMode === 'deep-research') {
      timerViewState.phase = 'research';
      const resMins = settingsState.researchDuration;
      timerViewState.durationSeconds = resMins * 60;
      timerViewState.remainingSeconds = resMins * 60;
      if (timerFocusLabel) timerFocusLabel.textContent = 'RESEARCH PHASE';
      if (timerModeBadge) timerModeBadge.textContent = `Deep research • Phase 1: Researching (${resMins} min)`;
      if (timerNextPhaseBtn) timerNextPhaseBtn.style.display = 'flex';
      if (roadmapPanel) roadmapPanel.style.display = 'none';
    } else {
      timerViewState.phase = 'speaking';
      timerViewState.durationSeconds = 60;
      timerViewState.remainingSeconds = 60;
      if (timerFocusLabel) timerFocusLabel.textContent = 'FOCUS MODE';
      if (timerModeBadge) timerModeBadge.textContent = `Off the cuff • 1 min`;
      if (timerNextPhaseBtn) timerNextPhaseBtn.style.display = 'none';
      if (roadmapPanel) roadmapPanel.style.display = 'flex';
      updateSpeakingRoadmapUI(state.currentSubtopic, 60, 'off-the-cuff');
    }

    timerViewState.isPaused = false;
    if (timerPauseBtn) {
      timerPauseBtn.classList.remove('paused');
      const pText = document.getElementById('timer-pause-text');
      if (pText) pText.textContent = 'Pause';
    }
    updateTimerDisplayUI();
    document.body.classList.add('in-timer-view');
    if (timerView) { timerView.classList.add('active'); timerView.setAttribute('aria-hidden', 'false'); }
    timerViewState.active = true;
    startTimerCountdown();
  }

  function exitTimerView() {
    if (state.soundEnabled) audioService.playTimerStartSound();
    clearInterval(timerViewState.intervalId);
    timerViewState.intervalId = null;
    document.body.classList.remove('in-timer-view');
    if (timerView) { timerView.classList.remove('active'); timerView.setAttribute('aria-hidden', 'true'); }
    timerViewState.active = false;
    updateHomepageTimerButtonLabel();
  }

  if (timerBtn) timerBtn.addEventListener('click', enterTimerView);
  if (timerNextPhaseBtn) timerNextPhaseBtn.addEventListener('click', startSpeakingPhaseInDeepResearch);
  if (timerPauseBtn) {
    timerPauseBtn.addEventListener('click', () => {
      if (state.soundEnabled) audioService.playTimerStartSound();
      timerViewState.isPaused = !timerViewState.isPaused;
      timerPauseBtn.classList.toggle('paused', timerViewState.isPaused);
      const pText = document.getElementById('timer-pause-text');
      if (pText) pText.textContent = timerViewState.isPaused ? 'Resume' : 'Pause';
    });
  }
  if (timerResetBtn) {
    timerResetBtn.addEventListener('click', () => {
      if (state.soundEnabled) audioService.playTimerStartSound();
      timerViewState.remainingSeconds = timerViewState.durationSeconds;
      timerViewState.isPaused = false;
      if (timerPauseBtn) timerPauseBtn.classList.remove('paused');
      updateTimerDisplayUI();
      startTimerCountdown();
    });
  }
  if (timerExitBtn) timerExitBtn.addEventListener('click', exitTimerView);

  function escapeHtml(str) {
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function renderTopicHistory() {
    if (!topicHistoryList) return;
    const historyPanelTitle = document.getElementById('history-panel-title');
    const isDeep = state.selectedMode === 'deep-research';
    const activeHistory = isDeep ? inMemoryStore.historyDeepResearch : inMemoryStore.historyOffTheCuff;

    if (historyPanelTitle) {
      historyPanelTitle.textContent = isDeep ? 'Deep Research History' : 'Off The Cuff History';
    }

    if (!activeHistory.length) {
      topicHistoryList.innerHTML = `<div class="history-empty">No ${isDeep ? 'deep research' : 'off the cuff'} topics spun yet</div>`;
      return;
    }
    topicHistoryList.innerHTML = activeHistory.map(item => `
      <div class="history-item">
        <div class="history-item-left">
          <span class="history-item-name">${escapeHtml(item.topic)}</span>
          <div class="history-item-meta">
            <span>${escapeHtml(item.categoryLabel || item.category)}</span> •
            <span class="history-item-tag tag-${item.difficulty || 'medium'}">${escapeHtml(item.difficulty || 'medium')}</span>
          </div>
        </div>
        <span class="history-item-meta">${escapeHtml(item.timeStr || '')}</span>
      </div>
    `).join('');
  }

  function updateTopicDisplay(text, isIntermediate = false) {
    if (!mainTopicDisplay) return;
    mainTopicDisplay.textContent = text;
    mainTopicDisplay.style.opacity = isIntermediate ? '0.85' : '1';
    mainTopicDisplay.style.transform = isIntermediate ? 'translateY(1px) scale(0.99)' : 'translateY(0) scale(1)';
    if (window.innerWidth > 900) {
      mainTopicDisplay.style.fontSize = text.length > 24 ? '62px' : (text.length > 17 ? '74px' : '');
      mainTopicDisplay.style.lineHeight = text.length > 24 ? '72px' : (text.length > 17 ? '84px' : '');
    } else {
      mainTopicDisplay.style.fontSize = '';
      mainTopicDisplay.style.lineHeight = '';
    }
  }

  function updateCategoryIllustration(cat) {
    document.querySelectorAll('.category-illustration').forEach(img => {
      if (img.getAttribute('data-category') === cat) {
        img.classList.remove('exiting', 'entering');
        img.classList.add('active');
        setTimeout(() => setTimeout(() => img.classList.add('entering'), 10), 10);
      } else if (img.classList.contains('entering') || img.classList.contains('active')) {
        img.classList.remove('entering', 'active');
        img.classList.add('exiting');
        setTimeout(() => img.classList.remove('exiting'), 100);
      }
    });
  }

  updateCategoryIllustration(state.selectedCategory);

  function startSpinTransaction() {
    if (state.isSpinning || timerViewState.active) return;
    state.isSpinning = true;
    if (spinBtn) { spinBtn.disabled = true; spinBtn.classList.add('disabled'); spinBtn.setAttribute('aria-disabled', 'true'); }

    const finalSubtopic = generateSubtopic({
      category: state.selectedCategory,
      difficulty: state.selectedDifficulty,
      previousSubtopic: state.currentSubtopic,
      recentSubtopicsMap: state.recentSubtopics,
      mode: state.selectedMode
    });

    if (state.soundEnabled) audioService.playSpinStartSound();

    const ds = state.selectedMode === 'deep-research' ? DEEP_RESEARCH_TOPICS : OFF_THE_CUFF_TOPICS;
    const pool = (ds[state.selectedCategory] || {})[state.selectedDifficulty] || ["Voting in Elections"];

    const startTime = Date.now(), duration = 1500;
    let lastStepTime = 0;

    function animateStep() {
      const elapsed = Date.now() - startTime;
      if (elapsed < duration) {
        const stepDelay = elapsed < 700 ? 60 : (elapsed < 1150 ? 120 : 180);
        if (Date.now() - lastStepTime >= stepDelay) {
          lastStepTime = Date.now();
          updateTopicDisplay(pool[Math.floor(Math.random() * pool.length)], true);
          if (state.soundEnabled) audioService.playSpinTickSound(1 - elapsed / duration);
        }
        setTimeout(animateStep, 20);
      } else {
        updateTopicDisplay(finalSubtopic, false);
        state.currentSubtopic = finalSubtopic;
        if (state.soundEnabled) audioService.playResultSound();

        state.streak += 1; state.spinCount += 1;
        inMemoryStore.streak = state.streak;
        inMemoryStore.spinCount = state.spinCount;
        if (streakBadge) {
          streakBadge.textContent = state.streak;
          streakBadge.parentElement.style.transform = 'scale(1.08)';
          setTimeout(() => streakBadge.parentElement.style.transform = 'scale(1)', 180);
        }

        const now = new Date();
        const historyItem = {
          topic: finalSubtopic,
          category: state.selectedCategory,
          categoryLabel: CATEGORY_NAMES[state.selectedCategory] || state.selectedCategory,
          difficulty: state.selectedDifficulty,
          mode: state.selectedMode,
          timeStr: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          timestamp: now.getTime()
        };

        if (state.selectedMode === 'deep-research') {
          inMemoryStore.historyDeepResearch.unshift(historyItem);
          if (inMemoryStore.historyDeepResearch.length > 25) inMemoryStore.historyDeepResearch.pop();
        } else {
          inMemoryStore.historyOffTheCuff.unshift(historyItem);
          if (inMemoryStore.historyOffTheCuff.length > 25) inMemoryStore.historyOffTheCuff.pop();
        }
        renderTopicHistory();

        state.isSpinning = false;
        if (spinBtn) { spinBtn.disabled = false; spinBtn.classList.remove('disabled'); spinBtn.setAttribute('aria-disabled', 'false'); }
      }
    }
    setTimeout(animateStep, 20);
  }

  if (spinBtn) spinBtn.addEventListener('click', startSpinTransaction);

  const updateSelectedSubtopic = () => {
    const newSubtopic = generateSubtopic({
      category: state.selectedCategory,
      difficulty: state.selectedDifficulty,
      previousSubtopic: state.currentSubtopic,
      recentSubtopicsMap: state.recentSubtopics,
      mode: state.selectedMode
    });
    state.currentSubtopic = newSubtopic;
    updateTopicDisplay(newSubtopic, false);
  };

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.isSpinning || timerViewState.active) return;
      categoryBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-checked', 'false'); });
      btn.classList.add('active');
      state.selectedCategory = btn.getAttribute('data-category');
      updateSelectedSubtopic();
      updateCategoryIllustration(state.selectedCategory);
    });
  });

  difficultyBtns.forEach(btn => {
    const btnDiff = btn.getAttribute('data-difficulty');
    if (btnDiff === state.selectedDifficulty) {
      difficultyBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-checked', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-checked', 'true');
    }
    btn.addEventListener('click', () => {
      if (state.isSpinning || timerViewState.active) return;
      difficultyBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-checked', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-checked', 'true');
      state.selectedDifficulty = btn.getAttribute('data-difficulty');
      inMemoryStore.difficulty = state.selectedDifficulty;
      updateSelectedSubtopic();
    });
  });

  function updateModeUI(mode) {
    state.selectedMode = mode;
    const heroSubtitle = document.getElementById('hero-subtitle');
    document.body.classList.toggle('mode-off-the-cuff', mode === 'off-the-cuff');
    document.body.classList.toggle('mode-deep-research', mode !== 'off-the-cuff');
    if (heroSubtitle) {
      heroSubtitle.textContent = mode === 'off-the-cuff'
        ? "Minimal prep. Try to think quick on your feet."
        : "Spin a topic, set a research timer, then start the speech timer whenever you're ready.";
    }
    if (mode === 'off-the-cuff') toggleSettings(false);
    updateHomepageTimerButtonLabel();
    renderTopicHistory();
  }

  updateModeUI(state.selectedMode);

  modeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (state.isSpinning || timerViewState.active) return;
      modeBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-checked', 'false'); });
      btn.classList.add('active'); btn.setAttribute('aria-checked', 'true');
      updateModeUI(btn.getAttribute('data-mode'));
      updateSelectedSubtopic();
    });
  });

  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (state.selectedMode === 'deep-research') {
        inMemoryStore.historyDeepResearch = [];
      } else {
        inMemoryStore.historyOffTheCuff = [];
      }
      renderTopicHistory();
    });
  }

  renderTopicHistory();
});
