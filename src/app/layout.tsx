import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactBars from "@/components/ContactBars";
import JsonLd from "@/components/JsonLd";
import { SITE } from "@/lib/site";
import { AREAS } from "@/lib/areas";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const viewport: Viewport = { themeColor: "#0F4C5C", width: "device-width", initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Invisible Grills Installation in Chennai | Safety Nets & Balcony Grills",
    template: `%s | ${SITE.name}`,
  },
  description: `Invisible grills, safety nets, sports nets, mosquito mesh, cloth hangers and bird spikes for Chennai apartments and houses. Free site visit. Call ${SITE.phoneDisplay}.`,
  openGraph: { type: "website", locale: "en_IN", siteName: SITE.name },
  alternates: { canonical: "./" },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${SITE.url}/#business`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneTel,
  description: SITE.description,
  ...(SITE.email ? { email: SITE.email } : {}),
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}),
    addressCountry: SITE.address.country,
  },
  areaServed: AREAS.map((name) => ({ "@type": "Place", name: `${name}, Chennai` })),
  openingHoursSpecification: [{
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ContactBars />
        <JsonLd data={localBusiness} />
      </body>
    </html>
  );
}
