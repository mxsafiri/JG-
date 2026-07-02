// The Company We Keep — logo wall.
// Per the client's feedback document: no borders on logos, Ramani removed.
// All 24 logos supplied by the client (transparent 1080×1080 PNGs).

// `light: true` marks white/very light artwork that needs a dark treatment
// to stay visible on the white logo wall.
export type Client = { name: string; logo: string; light?: boolean };

export const clients: Client[] = [
  { name: "ABSA Bank", logo: "/logos/absa.png" },
  { name: "Showmax", logo: "/logos/showmax.png" },
  { name: "UNICEF", logo: "/logos/unicef.png" },
  { name: "TBL / ABInBev", logo: "/logos/tbl-abinbev.png" },
  { name: "Serengeti Breweries", logo: "/logos/sbl.png" },
  { name: "Chloride Exide", logo: "/logos/chloride-exide.png" },
  { name: "Halotel", logo: "/logos/halotel.png" },
  { name: "Selcom Pesa", logo: "/logos/selcom-pesa.png" },
  { name: "MUA Insurance", logo: "/logos/mua.png" },
  { name: "TAMGO Tanzania", logo: "/logos/tamgo.png" },
  { name: "Young Africans SC", logo: "/logos/yanga.png" },
  { name: "Africa Football League", logo: "/logos/afl.png" },
  { name: "PigaBet", logo: "/logos/pigabet.png", light: true },
  { name: "10bet", logo: "/logos/10bet.png" },
  { name: "M-Bet", logo: "/logos/m-bet.png" },
  { name: "Ithuba", logo: "/logos/ithuba.png" },
  { name: "Bravo", logo: "/logos/bravo.png" },
  { name: "Y9", logo: "/logos/y9.png" },
  { name: "Howden Puri", logo: "/logos/howden-puri.png", light: true },
  { name: "Phoenix Assurance", logo: "/logos/phoenix.png" },
  { name: "Mwanga Hakika Bank", logo: "/logos/mwanga-hakika.png" },
  { name: "TICTS", logo: "/logos/ticts.png" },
  { name: "ATI", logo: "/logos/ati.png" },
  { name: "Oxenham", logo: "/logos/oxenham.png" },
];
