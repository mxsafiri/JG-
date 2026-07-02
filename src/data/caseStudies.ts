// Case study copy is taken verbatim from the client's deck:
// "JG web/JacksonGroup_CaseStudies .pptx" (22 Client Stories, 2025).
// The deck contains 12 written stories; the remaining 10 can be added
// here as the client supplies them.

export type CaseStudy = {
  slug: string;
  client: string;
  index: string; // numbering as it appears in the deck, e.g. "02 / 22"
  tags: string[];
  region: string;
  summary: string;
  image?: string; // real campaign asset in /public/media, when available
  featured?: boolean; // the three homepage tiles requested in the feedback doc
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chloride-exide",
    client: "Chloride Exide",
    index: "02 / 22",
    tags: ["Digital Marketing", "Social Media", "Sales & Distribution"],
    region: "Tanzania",
    summary:
      "Tanzania's market leader in automotive batteries didn't need help getting to the top — they needed help staying there. We built a marketing strategy tailored specifically to the Tanzanian market, shining a light on the PowerLast Battery and the Dial-A-Battery service. Through sharp digital content, social media management, and on-the-ground distribution support, we kept Chloride Exide visible, relevant, and ahead of the competition.",
    featured: true,
  },
  {
    slug: "absa-bank",
    client: "ABSA Bank",
    index: "05 / 22",
    tags: ["Media Buying", "EPL Sponsorship Activation", "Brand Strategy"],
    region: "Tanzania",
    summary:
      "ABSA came to us with two challenges at once: squeeze more value out of their media spend in Tanzania, and turn an English Premier League sponsorship into something fans actually cared about. On the media side, we built a data-driven buying strategy across TV, radio, digital, and print. On the EPL side, we designed BTL activations built for match days — live screenings, interactive fan experiences, and giveaways — amplified with influencer-led social campaigns.",
    featured: true,
  },
  {
    slug: "tamgo-tanzania",
    client: "TAMGO Tanzania",
    index: "18 / 22",
    tags: ["Rebrand", "Corporate PR", "Event Management"],
    region: "Tanzania",
    summary:
      "Rebranding from Merry Water to TAMGO Tanzania was a statement of intent about where the business was going. As a leading provider of water treatment, solar systems, pumps, and diesel generators, TAMGO needed the rebrand to communicate strength and ambition. We managed the full corporate communications strategy and launch event, with live TV and online TV interviews giving the rebrand immediate visibility.",
    featured: true,
  },
  {
    slug: "tbl-budweiser",
    client: "Tanzania Breweries / Budweiser",
    index: "03 / 22",
    tags: ["Content Production", "Digital Management", "Brand Activation"],
    region: "Tanzania",
    summary:
      "When the World Cup came around, Budweiser Tanzania wanted more than a logo on a post — they wanted to own the moment. We led content development and digital management for the campaign, merging creative production with strategic planning to put the brand at the heart of the football conversation. From live fan events to digital content that captured the energy of the tournament, every activation was built to drive real brand connection — not just impressions.",
  },
  {
    slug: "showmax",
    client: "Showmax",
    index: "04 / 22",
    tags: ["Market Entry", "ATL & BTL Campaigns", "Influencer Marketing"],
    region: "Tanzania",
    summary:
      "Entering a competitive streaming market is hard enough — doing it in a way that feels genuinely local is harder. When Showmax launched in Tanzania, we built and executed their full market entry strategy: ATL and BTL campaigns to drive awareness at scale, localised content promotions calibrated to Tanzanian tastes, and a network of influencer partnerships and grassroots activations to build word-of-mouth that advertising can't buy. Every touchpoint was designed to make Showmax feel like it belonged here from day one.",
  },
  {
    slug: "mua-insurance",
    client: "MUA Insurance",
    index: "06 / 22",
    tags: ["Corporate Communications", "Rebrand", "PR"],
    region: "Tanzania",
    summary:
      "When Phoenix of Assurance Tanzania transitioned to MUA in 2023, they needed the market, media, and stakeholders to trust the new name from day one. We built and delivered a full 360-degree rebrand campaign covering every key touchpoint: the launch event, stakeholder engagement, corporate communications, and above-the-line activity to drive broad market awareness. The campaign was designed not just to announce the change, but to build confidence in it.",
  },
  {
    slug: "10bet-africa",
    client: "10bet Africa",
    index: "11 / 22",
    tags: ["Pan-African GTM Strategy", "Sports Sponsorship"],
    region: "9 Markets",
    summary:
      "10bet had ambitious plans to enter Africa across nine markets. They needed a partner who understood that Africa is not one market. We built the full Pan-African go-to-market playbook — market entry plans, financial projections, product mix recommendations, and a sponsorship strategy that put 10bet on the front of six premier league shirts across Zambia, Ghana, and Nigeria. We launched four markets by Q4 2022.",
  },
  {
    slug: "africa-football-league",
    client: "Africa Football League",
    index: "12 / 22",
    tags: ["Event Management", "Government Advisory", "Sports"],
    region: "East Africa",
    summary:
      "The AFL's inaugural opening ceremony at Benjamin Mkapa Stadium on 20 October 2023 demanded perfection. We handled political advisory, logistics and permits clearance, inter-government co-ordination, opening ceremony entertainment integration, and media advisory. Over 60 VVIP delegates were managed without incident, and a pre-launch press release distributed across East Africa ensured continental attention before a single kick was taken.",
  },
  {
    slug: "yanga",
    client: "Young Africans SC (Yanga)",
    index: "13 / 22",
    tags: ["Sports Marketing", "UNICEF Partnership", "Behaviour Change"],
    region: "Tanzania",
    summary:
      "Young Africans SC is more than a football club — it is one of the most trusted community institutions in Tanzania. We manage Yanga's commercial marketing globally, brokering a partnership between UNICEF and Yanga SC to deliver behaviour change campaigns including Covid-19 vaccination awareness and Ebola prevention messaging. The club's reach across radio, TV, and social media made it the ideal vehicle for the message.",
  },
  {
    slug: "rumble-in-dar",
    client: "Rumble in Dar",
    index: "14 / 22",
    tags: ["Sports IP", "Brand Activation", "Boxing"],
    region: "Tanzania",
    summary:
      "Rumble in Dar is not a client brief — it is a brand asset we created from scratch. Conceived and developed in-house by Jackson Group, the professional boxing series gives Tanzania a world-class sporting spectacle and gives sponsors one of the most powerful brand activation platforms on the continent. Each edition places the presenting sponsor's brand at the centre of an electrifying live event with worldwide broadcast reach and a tourism campaign that puts Dar es Salaam on the global map.",
    image: "/media/rumble-in-dar.jpeg",
  },
  {
    slug: "selcompesa",
    client: "SelcomPesa",
    index: "20 / 22",
    tags: ["360 Marketing", "Awareness & Acquisition", "Content Development"],
    region: "Tanzania",
    summary:
      "SelcomPesa operates in one of Tanzania's most competitive spaces — mobile financial services — where awareness alone is not enough to move the needle. Our engagement covers the full marketing spectrum: content development and social media management to above-the-line awareness campaigns and performance-driven acquisition activity. Every piece of content we produce is built with a dual purpose — to grow recognition of the brand and to convert that recognition into active users.",
  },
  {
    slug: "pigabet",
    client: "PigaBet",
    index: "22 / 22",
    tags: ["360 Marketing", "Awareness & Acquisition", "Sports IP & Rights"],
    region: "Tanzania",
    summary:
      "In Tanzania's fast-moving sports betting market, visibility is everything — but visibility without a credible sports identity only goes so far. Our work with PigaBet covers both fronts: a full 360-degree marketing programme across content, social media, and performance acquisition, alongside sports IP rights management and football club partnerships — identifying the right clubs, negotiating the deals, and building activation strategies that put the brand where fans are watching.",
    image: "/media/pigabet-shinda-ndinga.jpeg",
  },
];

export const featuredCases = caseStudies.filter((c) => c.featured);

export function getCase(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
