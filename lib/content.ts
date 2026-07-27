/**
 * Mesa content model. This typed object is the single source of truth for
 * everything the site renders — edit it to change the site's content.
 */

export type NavLink = { label: string; href: string };
export type Stat = { value: string; label: string };
export type StripItem = { kicker: string; text: string };
export type Dish = { name: string; desc: string; price: string; tag?: string };
export type MenuCategory = {
  key: string;
  label: string;
  photo: string;
  image: string;
  items: Dish[];
};
export type Hour = { day: string; time: string; rest?: boolean };

export type SiteContent = {
  brand: string;
  phone: { display: string; href: string };
  email: string;
  nav: NavLink[];
  hero: {
    kicker: string;
    titleLead: string;
    titleEm: string;
    subhead: string;
    primaryCta: NavLink;
    secondaryCta: NavLink;
    imageCaption: string;
    image: string;
    stats: Stat[];
  };
  tonight: StripItem[];
  menu: {
    kicker: string;
    heading: string;
    note: string;
    categories: MenuCategory[];
    tasting: { kicker: string; title: string; note: string };
  };
  story: {
    kicker: string;
    heading: string;
    body: string[];
    quote: string;
    imageCaption: string;
    image: string;
  };
  visit: {
    kicker: string;
    addressLines: string[];
    transit: string;
    hours: Hour[];
    imageCaption: string;
    image: string;
  };
  footer: {
    links: NavLink[];
    note: string;
  };
};

export const content: SiteContent = {
  brand: "Mesa",
  phone: { display: "+49 30 1234 5678", href: "+493012345678" },
  email: "hello@mesa.example",
  nav: [
    { label: "Menu", href: "#menu" },
    { label: "Our Fire", href: "#story" },
    { label: "Visit", href: "#visit" },
  ],
  hero: {
    kicker: "Wood-fired · Kreuzberg, Berlin",
    titleLead: "Dough that waits.",
    titleEm: "Fire that doesn't.",
    subhead:
      "Seventy-two hours of slow fermentation, ninety seconds over oak embers. Come hungry, stay late, let us keep bringing things to the table.",
    primaryCta: { label: "See the menu", href: "#menu" },
    secondaryCta: { label: "Find us", href: "#visit" },
    imageCaption: "A wood-fired Margherita, fresh from the oven",
    image:
      "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=1600&q=80",
    stats: [
      { value: "72h", label: "Fermentation" },
      { value: "480°", label: "Oak oven" },
      { value: "14", label: "Seats at the pass" },
    ],
  },
  tonight: [
    {
      kicker: "Tonight",
      text: "Six tables still open after 21:00. Walk-ins welcome at the pass.",
    },
    {
      kicker: "This week",
      text: "Datterino tomatoes from Puglia, picked Monday, gone by Sunday.",
    },
    {
      kicker: "Always",
      text: "No corkage on Tuesdays. Bring the bottle you've been saving.",
    },
  ],
  menu: {
    kicker: "The Menu",
    heading: "Small plates, then fire.",
    note: "The list changes as the market does. Ask us what came in this morning.",
    tasting: {
      kicker: "Feed me",
      title: "Let the kitchen decide — five courses, €58 a head.",
      note: "Ask us at the pass — we'll feed the whole table.",
    },
    categories: [
      {
        key: "antipasti",
        label: "Antipasti",
        photo: "burrata, torn bread, olive oil pooling",
        image:
          "https://images.unsplash.com/photo-1596924699736-be026ddb5b0c?auto=format&fit=crop&w=1000&q=80",
        items: [
          {
            name: "Burrata, July peaches",
            desc: "Puglian burrata, grilled peach, basil oil, black pepper.",
            price: "€14",
            tag: "New",
          },
          {
            name: "Focaccia della casa",
            desc: "Same dough, more salt. Rosemary, Ligurian olive oil.",
            price: "€7",
          },
          {
            name: "Fritto misto di verdure",
            desc: "Zucchini flowers, artichoke, lemon, saffron aioli.",
            price: "€13",
          },
          {
            name: "Vitello tonnato",
            desc: "Slow-roast veal, tuna cream, capers fried until they crackle.",
            price: "€16",
          },
          {
            name: "Olive Cerignola & almonds",
            desc: "Warmed in chilli oil and orange peel.",
            price: "€6",
          },
        ],
      },
      {
        key: "pizze",
        label: "Pizze",
        photo: "leopard-spotted crust, close crop",
        image:
          "https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?auto=format&fit=crop&w=1000&q=80",
        items: [
          {
            name: "Marinara antica",
            desc: "Datterino tomato, garlic confit, oregano, no cheese, no apology.",
            price: "€12",
          },
          {
            name: "Margherita",
            desc: "Fior di latte, San Marzano, basil picked as it goes in.",
            price: "€14",
            tag: "House",
          },
          {
            name: "Nadia's Diavola",
            desc: "Ventricina piccante, honey from Brandenburg, chilli threads.",
            price: "€17",
            tag: "Signature",
          },
          {
            name: "Bianca ai funghi",
            desc: "Taleggio, chestnut mushrooms, thyme, hazelnut crumb.",
            price: "€18",
          },
          {
            name: "Patate e rosmarino",
            desc: "Thin potato, rosemary, smoked scamorza, lemon zest.",
            price: "€16",
          },
          {
            name: "Salsiccia e friarielli",
            desc: "Fennel sausage, bitter greens, provola, crushed garlic.",
            price: "€18",
          },
        ],
      },
      {
        key: "dolci",
        label: "Dolci",
        photo: "torta, one slice lifted, dark table",
        image:
          "https://images.unsplash.com/photo-1698688334089-c68105801d02?auto=format&fit=crop&w=1000&q=80",
        items: [
          {
            name: "Tiramisù al forno",
            desc: "Made at four, gone by eleven. Marsala, no shortcuts.",
            price: "€9",
          },
          {
            name: "Olive oil & blood orange cake",
            desc: "Warm, with crème fraîche.",
            price: "€8",
          },
          {
            name: "Affogato",
            desc: "Fior di latte gelato drowned in espresso and grappa.",
            price: "€7",
          },
          {
            name: "Pecorino, honey, walnut",
            desc: "For the ones who don't do sweet.",
            price: "€11",
          },
        ],
      },
      {
        key: "bevande",
        label: "Bevande",
        photo: "amber negroni beside a candle",
        image:
          "https://images.unsplash.com/photo-1626688445658-c948f32d68ba?auto=format&fit=crop&w=1000&q=80",
        items: [
          {
            name: "Negroni sbagliato",
            desc: "The mistake we keep making. Prosecco instead of gin.",
            price: "€11",
          },
          {
            name: "Etna Rosso, Nerello Mascalese",
            desc: "Volcanic, savoury, drinks cool. Glass / bottle.",
            price: "€9 / 42",
          },
          {
            name: "Vermentino di Gallura",
            desc: "Salt, green almond, a little bite.",
            price: "€8 / 38",
          },
          {
            name: "Amaro flight",
            desc: "Three pours, chosen by whoever is behind the bar.",
            price: "€14",
          },
          {
            name: "Chinotto & bitter soda",
            desc: "House-made, zero alcohol.",
            price: "€5",
          },
        ],
      },
    ],
  },
  story: {
    kicker: "Our Fire",
    heading: "We built the oven first and the room around it.",
    body: [
      "Nadia Bruno spent nine years in Naples learning that patience is an ingredient. Mesa is what happened when she came back to Berlin with a starter culture in her hand luggage and a stubborn idea about time.",
      "There is one oven, one long table, and a bar where you can watch the whole thing happen. Nothing here is rushed except the ninety seconds that matter.",
    ],
    quote: "Come as you are. Leave a little later than you planned.",
    imageCaption: "At the mouth of the oven",
    image:
      "https://images.unsplash.com/photo-1694444399201-a5680e376313?auto=format&fit=crop&w=1600&q=80",
  },
  visit: {
    kicker: "Find us",
    addressLines: ["Example Street 12", "10000 Berlin"],
    transit: "Two minutes from the metro. Green door, no sign.",
    hours: [
      { day: "Tue – Thu", time: "17:30 – 23:00" },
      { day: "Fri – Sat", time: "17:30 – 00:30" },
      { day: "Sunday", time: "13:00 – 21:00" },
      { day: "Monday", time: "Oven rests", rest: true },
    ],
    imageCaption: "The dining room at dusk",
    image:
      "https://images.unsplash.com/photo-1489421139335-f5e36584748c?auto=format&fit=crop&w=1400&q=80",
  },
  footer: {
    links: [
      { label: "Menu", href: "#menu" },
      { label: "Our Fire", href: "#story" },
      { label: "Contact", href: "mailto:hello@mesa.example" },
      { label: "Legal Notice", href: "/legal" },
      { label: "Privacy", href: "/privacy" },
    ],
    note: "© 2026 — made slowly in Kreuzberg",
  },
};
