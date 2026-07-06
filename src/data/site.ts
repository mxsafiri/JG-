// Central site configuration.
// CONTACT DETAILS below were taken from Jackson Group's public listings —
// confirm with the client before launch (see README: "Awaiting from client").

export const site = {
  name: "Jackson Group",
  tagline: "Pan-African Brand, Marketing & Growth Consultancy",
  description:
    "Jackson Group is an independent, Pan-African marketing and growth consultancy helping brands enter markets, scale faster, and drive measurable impact across Africa.",
  url: "https://jacksongrouptz.com",
  email: "info@jacksongrouptz.com",
  phone: "+255 768 500 999",
  address: "Chole Plaza, 1st Floor, Chole Road, Masaki, P.O. Box 22365, Dar es Salaam, Tanzania",
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

// Service taxonomy and blurbs from the official company profile (2026)
export const services = [
  { n: "01", title: "Brand Strategy", blurb: "Compelling, inspiring brand strategy recommendations that address your business growth." },
  { n: "02", title: "Go-To-Market Strategy", blurb: "Insight and mapping expertise that unlocks the value chain and ensures products reach their customers." },
  { n: "03", title: "Communication Strategy", blurb: "Effective communications, media planning, and optimum execution — measured for the highest ROI." },
  { n: "04", title: "Corporate Communication", blurb: "Media and public relations, crisis communication, and stakeholder management, internal and external." },
  { n: "05", title: "Rights Management", blurb: "Sponsorship revenue and IP rights management across soccer, boxing, and golf properties." },
];

export const stats = [
  { value: "22", label: "Client stories" },
  { value: "9+", label: "African markets" },
  { value: "20+", label: "Years of experience" },
  { value: "2015", label: "Est. Dar es Salaam" },
];
