import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ironpulsefit.lk"),
  title: {
    default: "Iron Pulse Fitness | Premium Gym in Trincomalee, Sri Lanka",
    template: "%s | Iron Pulse Fitness",
  },
  description:
    "Transform your body at Iron Pulse Fitness - Trincomalee's premier gym with certified trainers, modern equipment, and personalized training programs. Start your free trial today!",
  keywords: [
    "gym Trincomalee",
    "fitness center Sri Lanka",
    "personal training",
    "weight loss",
    "muscle building",
    "HIIT classes",
    "yoga",
    "boxing fitness",
  ],
  authors: [{ name: "Iron Pulse Fitness" }],
  creator: "Iron Pulse Fitness",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ironpulsefit.lk",
    siteName: "Iron Pulse Fitness",
    title: "Iron Pulse Fitness | Train Hard. Live Strong.",
    description:
      "Sri Lanka's premier fitness destination. State-of-the-art equipment, expert trainers, and a community that pushes you to be your best.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Iron Pulse Fitness - Premium Gym",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Iron Pulse Fitness | Train Hard. Live Strong.",
    description:
      "Transform your body at Trincomalee's premier fitness destination.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ironpulsefit.lk",
              name: "Iron Pulse Fitness",
              description:
                "Premium fitness center offering personal training, group classes, and state-of-the-art equipment.",
              url: "https://ironpulsefit.lk",
              telephone: "+94741234567",
              email: "info@ironpulsefit.lk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "No. 120, Main Street",
                addressLocality: "Trincomalee",
                addressCountry: "LK",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "8.5874",
                longitude: "81.2152",
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "06:00",
                closes: "22:00",
              },
              priceRange: "$$",
              image: "/og-image.jpg",
              sameAs: [
                "https://facebook.com/ironpulsefitness",
                "https://instagram.com/ironpulsefitness",
                "https://tiktok.com/@ironpulsefitness",
                "https://youtube.com/@ironpulsefitness",
              ],
            }),
          }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
