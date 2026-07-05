// Central site configuration.
// CONTACT DETAILS below were taken from Jackson Group's public listings —
// confirm with the client before launch (see README: "Awaiting from client").

export const site = {
  name: "Jackson Group",
  tagline: "Pan-African Brand, Marketing & Growth Consultancy",
  description:
    "Jackson Group is an independent, Pan-African marketing and growth consultancy helping brands enter markets, scale faster, and drive measurable impact across Africa.",
  url: "https://jacksongrouptz.com",
  email: "projects@jacksongrouptz.com",
  phone: "+255 768 500 999",
  address: "418 Toure Drive, Masaki, Dar es Salaam, Tanzania",
  social: {
    facebook: "https://www.facebook.com/jacksongrouptz/",
    linkedin: "https://tz.linkedin.com/company/jackson-group-tz-",
  },
};

// Navigation order and naming are exactly as requested in the client's
// feedback document: About Us, Our Work, The Company We Keep, Contact.
export const nav = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/work" },
  { label: "The Company We Keep", href: "/company-we-keep" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  { n: "01", title: "Brand & Go-To-Market Strategy", blurb: "Market entry playbooks, brand positioning, and growth strategy built for African markets." },
  { n: "02", title: "Digital & Social Media", blurb: "Content development, social media management, and performance-driven acquisition." },
  { n: "03", title: "Media Buying & Communications", blurb: "Data-driven media strategy across TV, radio, digital, and print." },
  { n: "04", title: "Sports Marketing & IP", blurb: "Sponsorships, sports IP rights management, club partnerships, and owned properties." },
  { n: "05", title: "Events & Brand Activations", blurb: "ATL and BTL campaigns, launch events, and activations that people remember." },
  { n: "06", title: "Corporate PR & Advisory", blurb: "Corporate communications, rebrands, government advisory, and stakeholder engagement." },
];

export const stats = [
  { value: "22", label: "Client stories" },
  { value: "9+", label: "African markets" },
  { value: "20+", label: "Years of experience" },
  { value: "2015", label: "Est. Dar es Salaam" },
];
