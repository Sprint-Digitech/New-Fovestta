import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { getCustomHeadCode } from "@/lib/seo/head-code";
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

const DEFAULT_TITLE = "Fovestta™ | The #1 HRMS in India";
const DEFAULT_DESCRIPTION =
  "Manage TDS, EPF, ESI, IT compliance automatically. Transform HR from spreadsheets to intelligence. Trusted by 10,000+ Indian companies.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: "Fovestta",
  authors: [{ name: "Fovestta", url: SITE_URL }],
  keywords: ["HRMS India", "payroll software India", "HR software", "TDS compliance", "EPF ESI payroll", "attendance management"],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: SITE_URL,
    siteName: "Fovestta™",
    locale: "en_IN",
    type: "website",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/logo.png"],
  },
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const customHeadCode = await getCustomHeadCode();

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      {customHeadCode && <head dangerouslySetInnerHTML={{ __html: customHeadCode }} />}
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
