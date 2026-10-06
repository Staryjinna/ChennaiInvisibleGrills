import { SITE } from "./site";

export const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  path: string;
  name: string;
  short: string;
  cardText: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  accent: string;
  image: string;
  imageAlt: string;
  benefitsTitle: string;
  benefits: string[];
  whereTitle: string;
  where: string[];
  optionsTitle: string;
  options: string[];
  faqs: Faq[];
};

const call = `Call ${SITE.phoneDisplay}.`;

export const SERVICES: Service[] = [
  {
    slug: "invisible-grills-chennai",
    accent: "#ffc857",
    path: "/invisible-grills-chennai/",
    name: "Invisible Grills",
    short: "Invisible Grills",
    cardText:
      "Slim stainless steel cables that keep kids and pets safe while keeping your view and airflow open. Ideal for balconies, windows and duct areas.",
    seoTitle: "Invisible Grills Installation in Chennai | Balcony & Window Grills",
    metaDescription: `Stainless steel invisible grills for balconies and windows in Chennai apartments and houses. Child-safe, rust-resistant, open view. Free site visit. ${call}`,
    h1: "Invisible Grills Installation in Chennai",
    intro:
      "Invisible grills are high-tensile stainless steel cables fixed in tension across your balcony or window. From a distance they're barely noticeable, but up close they form a strong safety barrier for children, elders and pets. They're perfect for high-rise apartments where you want safety without caging in your view.",
    image: img("photo-1712061644903-6ececf90c18e"),
    imageAlt: "Apartment balcony with a railing and an open view of the city and river",
    benefitsTitle: "Why choose invisible grills",
    benefits: [
      "Keeps your balcony view and airflow open",
      "Strong high-tensile stainless steel cables, tensioned so they don't sag",
      "Close cable spacing to stop children slipping through",
      "Resistant to rust from Chennai's humidity and coastal air",
      "Neat aluminium track finish that suits modern facades",
      "Fitted by our own trained team, with a clean-up after",
    ],
    whereTitle: "Where we install",
    where: ["Balconies", "Windows", "French windows", "Staircase openings", "Duct areas", "Terraces", "Utility areas"],
    optionsTitle: "Options",
    options: ["Vertical or horizontal cables", "Silver / black / champagne track", "Cable gap to suit your needs"],
    faqs: [
      { q: "Are invisible grills really safe for children?", a: "Yes, when installed with the right cable spacing and tension. We use close spacing and tension every cable so it doesn't sag." },
      { q: "Will they rust near the beach (ECR, Besant Nagar, Thiruvanmiyur)?", a: "Stainless steel cables resist rust far better than iron. For coastal homes we'll recommend the right grade of stainless steel at the site visit." },
      { q: "How long does installation take?", a: "A typical 2BHK/3BHK balcony is done in a few hours to one day." },
      { q: "Does my apartment association allow it?", a: "Many do because the facade stays unchanged, but please check with your association first. We can share product details for their approval." },
      { q: "What is the price?", a: "Pricing is per square foot and depends on the cable and track you choose. Call us for a free site visit and exact quote." },
      { q: "Is there a warranty?", a: "Yes. Ask us for the warranty terms on cables and installation when we visit." },
    ],
  },
  {
    slug: "safety-nets-chennai",
    accent: "#4fd1e8",
    path: "/safety-nets-chennai/",
    name: "Safety Nets",
    short: "Safety Nets",
    cardText:
      "Strong, UV-treated nets for balconies, staircases and open shafts. A low-cost way to childproof and pigeon-proof your home.",
    seoTitle: "Balcony Safety Nets Installation in Chennai | Child & Pigeon Safety Nets",
    metaDescription: `Strong UV-treated balcony safety nets for children, pets and pigeons in Chennai. Apartments, staircases, duct areas. Free site visit. ${call}`,
    h1: "Safety Nets Installation in Chennai",
    intro:
      "Safety nets are the most affordable way to childproof a balcony or stop pigeons from entering your home. Our nets are made from UV-stabilised HDPE/nylon and fixed tightly with hooks and anchors, so they stay strong through Chennai's sun and monsoon.",
    image: img("photo-1764151604216-72059c4aa369"),
    imageAlt: "Child standing at an apartment balcony",
    benefitsTitle: "Benefits",
    benefits: ["Affordable", "Quick installation", "Nearly transparent from a distance", "UV-resistant", "Easy to remove or replace"],
    whereTitle: "Where we install",
    where: ["Balconies", "Staircases", "Duct areas", "Open shafts", "Windows", "Terraces"],
    optionsTitle: "Types we install",
    options: ["Children safety nets", "Pigeon / bird nets", "Balcony safety nets", "Staircase & duct area nets", "Construction safety nets", "Pet safety nets (cats)"],
    faqs: [
      { q: "Net or invisible grill: which should I choose?", a: "Nets cost less and also block pigeons. Invisible grills last longer and look more premium. We'll recommend the right one at the site visit." },
      { q: "How long do safety nets last?", a: "It depends on sun exposure and the net you choose. We'll explain the expected life of each option at the site visit." },
      { q: "Will it stop pigeons completely?", a: "Yes, if the whole opening is covered with the correct mesh size." },
    ],
  },
  {
    slug: "sports-nets-chennai",
    accent: "#3ddc97",
    path: "/sports-nets-chennai/",
    name: "Sports Nets",
    short: "Sports Nets",
    cardText:
      "Cricket practice nets, terrace and box cricket enclosures, and ball-stopper nets for apartments, schools and clubs.",
    seoTitle: "Sports Nets Installation in Chennai | Cricket Practice Nets & Box Cricket",
    metaDescription: `Cricket practice nets, terrace and box cricket nets, and ball-stopper nets in Chennai for apartments, schools, academies and clubs. ${call}`,
    h1: "Sports Nets Installation in Chennai",
    intro:
      "Turn your terrace, apartment common area or school ground into a safe play zone. We design and install cricket practice nets, box cricket enclosures and ball-stopper nets with strong poles and long-lasting netting.",
    image: img("photo-1761757106351-51c65f6d74d1"),
    imageAlt: "Two men playing cricket on a green field",
    benefitsTitle: "Good for",
    benefits: ["Apartment associations", "Schools", "Cricket academies", "Clubs", "Independent houses with terraces"],
    whereTitle: "Where we install",
    where: ["Apartment terraces", "Common areas", "School grounds", "Academies", "Club grounds", "House terraces"],
    optionsTitle: "We install",
    options: ["Cricket practice nets", "Terrace cricket nets", "Box cricket enclosures", "Football & futsal nets", "Badminton / volleyball nets", "Ball-stopper & boundary nets", "Golf practice nets"],
    faqs: [
      { q: "Can you install nets on an apartment terrace?", a: "Yes, with pole or rope-and-anchor systems that suit the structure. We check the terrace at the site visit." },
      { q: "What netting do you use?", a: "UV-treated HDPE/nylon netting for outdoor use. We confirm the thickness and ply that suit your game at the site visit." },
    ],
  },
  {
    slug: "mosquito-mesh-chennai",
    accent: "#a78bfa",
    path: "/mosquito-mesh-chennai/",
    name: "Mosquito Mesh",
    short: "Mosquito Mesh",
    cardText:
      "Custom-fit mesh for windows and doors: sliding, hinged, pleated and Velcro options. Fresh air without the mosquitoes.",
    seoTitle: "Mosquito Mesh for Windows & Doors in Chennai | Sliding, Pleated & Velcro Mesh",
    metaDescription: `Custom mosquito mesh for windows and doors in Chennai homes. Sliding, hinged, pleated and Velcro options. Keep air in, mosquitoes out. ${call}`,
    h1: "Mosquito Mesh Installation in Chennai",
    intro:
      "Chennai's monsoon brings mosquitoes and the risk of dengue. Our custom-made mosquito mesh lets you keep windows and doors open for fresh air while keeping insects out, with no chemicals and no coils.",
    image: img("photo-1789857431858-47e75dbca05b"),
    imageAlt: "Mesh window screen with frame",
    benefitsTitle: "Benefits",
    benefits: ["Made to measure", "Mesh that doesn't sag", "Aluminium frames", "Easy to clean", "Renter-friendly options"],
    whereTitle: "Where we install",
    where: ["Windows", "Balcony doors", "Main doors", "French windows", "Kitchen windows"],
    optionsTitle: "Options",
    options: ["Sliding window mesh", "Hinged / openable door mesh", "Pleated (folding) mesh", "Velcro mesh (budget, renter-friendly)", "Roll-up mesh", "Magnetic mesh"],
    faqs: [
      { q: "Can I install mesh in a rented flat?", a: "Yes. Velcro and magnetic mesh need no drilling and come off easily." },
      { q: "Will it reduce airflow?", a: "Only slightly. Fine mesh still lets most of the breeze through." },
    ],
  },
  {
    slug: "cloth-hangers-chennai",
    accent: "#fb7185",
    path: "/cloth-hangers-chennai/",
    name: "Cloth Hangers",
    short: "Cloth Hangers",
    cardText:
      "Ceiling-mounted pulley cloth drying hangers that save balcony space and keep clothes out of sight.",
    seoTitle: "Ceiling Cloth Drying Hangers in Chennai | Pulley Cloth Hanger Installation",
    metaDescription: `Ceiling-mounted pulley cloth drying hangers for balconies and utility areas in Chennai apartments. Save space, dry more. ${call}`,
    h1: "Cloth Hangers Installation in Chennai",
    intro:
      "Small balcony, lots of laundry? Our ceiling-mounted cloth drying hangers raise and lower with a pulley, so you can dry a full load overhead and free up your balcony floor.",
    image: img("photo-1788885340247-4ea53749a1df"),
    imageAlt: "Apartment building balcony with laundry hanging",
    benefitsTitle: "Benefits",
    benefits: ["Saves floor space", "Stainless steel pipes resist rust", "Smooth pulley system", "Keeps clothes out of view from the road"],
    whereTitle: "Where we install",
    where: ["Balconies", "Utility areas", "Wash areas", "Terraces (covered)"],
    optionsTitle: "Types",
    options: ["Ceiling pulley hangers (4/5/6 pipe)", "Wall-mounted foldable hangers", "Retractable cloth lines", "Stand-type hangers"],
    faqs: [
      { q: "How much weight can it hold?", a: "It depends on the model and ceiling. We'll confirm the safe load, spread evenly, at the site visit." },
      { q: "Can it be fixed under an invisible grill balcony?", a: "Yes, we often install both together." },
    ],
  },
  {
    slug: "bird-spikes-chennai",
    accent: "#fb923c",
    path: "/bird-spikes-chennai/",
    name: "Bird Spikes",
    short: "Bird Spikes",
    cardText:
      "Humane anti-bird spikes for AC units, ledges, parapets and signboards. Stops pigeons from sitting and nesting.",
    seoTitle: "Bird Spikes Installation in Chennai | Anti-Pigeon Spikes for AC & Ledges",
    metaDescription: `Humane bird spikes for AC outdoor units, ledges, parapets and signboards in Chennai. Stop pigeon droppings and nesting. ${call}`,
    h1: "Bird Spikes Installation in Chennai",
    intro:
      "Pigeon droppings damage AC units, stain walls and can carry disease. Bird spikes are a humane, low-maintenance way to stop pigeons from landing and nesting on ledges, AC units, pipes and signboards, without harming them.",
    image: img("photo-1785759189500-d1fae62b1735"),
    imageAlt: "Many pigeons perched on a building",
    benefitsTitle: "Benefits",
    benefits: ["Humane and low-maintenance", "UV-resistant", "Protects AC units and walls from droppings", "Quick, neat installation"],
    whereTitle: "Where we install",
    where: ["AC outdoor units", "Window ledges & sunshades", "Parapet walls", "Pipes", "Signboards", "Beams & CCTV cameras"],
    optionsTitle: "Materials",
    options: ["Polycarbonate base with stainless steel spikes", "UV-resistant", "Fixed with strong adhesive or screws"],
    faqs: [
      { q: "Do bird spikes hurt pigeons?", a: "No. The spikes are blunt and only stop birds from landing." },
      { q: "Spikes or nets?", a: "Use spikes for ledges and narrow surfaces. Use nets for full balcony openings. We often combine both." },
    ],
  },
];

export const bySlug = (slug: string) => SERVICES.find((s) => s.slug === slug)!;
