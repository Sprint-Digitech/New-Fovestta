import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const SITE_URL = "https://www.fovestta.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Fovestta™ | The #1 HRMS in India",
  description:
    "Manage TDS, EPF, ESI, IT compliance automatically. Transform HR from spreadsheets to intelligence. Trusted by 10,000+ Indian companies.",
  icons: {
    icon: [
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fovestta",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Fovestta is a modern HRMS built for Indian compliance, automating payroll, attendance, and statutory filings for growing companies.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "111, F-Block, Sector 8",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-95993-42525",
    email: "info@fovestta.com",
    contactType: "customer service",
  },
  sameAs: [
    "https://www.linkedin.com/company/fovesttahrmssolution/",
    "https://www.youtube.com/channel/UCw8feE-iKyZfvWC5JUnWO9A",
    "https://www.facebook.com/profile.php?id=61594400934190",
    "https://www.instagram.com/fovestta_hrms_solution",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="min-h-screen bg-white flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
