// Single source of truth for business details. Edit here; everything else reads from this file.
export const SITE = {
  name: "Chennai Invisible Grills", // TODO: confirm final business name
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://chennaiinvisiblegrills.com", // TODO: set real domain
  phoneDisplay: "+91 96606 66600",
  phoneTel: "+919660666600",
  whatsappNumber: "919660666600",
  email: "", // TODO: add a real email; hidden while empty
  address: {
    street: "Velachery", // TODO: add full street address
    locality: "Chennai",
    region: "Tamil Nadu",
    postalCode: "", // TODO: add PIN
    country: "IN",
  },
  hours: "Mon–Sun, 8:00 AM – 8:00 PM",
  warranty: "", // e.g. "2 years" — shown only when set
  tagline: "Safe homes. Open views.",
  description:
    "Chennai Invisible Grills installs invisible grills, safety nets, sports nets, mosquito mesh, cloth hangers and bird spikes for apartments and independent houses across Chennai, with free site visits and quick installation.",
  mapQuery: "Velachery, Chennai",
};

export const telHref = `tel:${SITE.phoneTel}`;
export const waHref = (text = "Hi, I need a quote for invisible grills / safety nets.") =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
