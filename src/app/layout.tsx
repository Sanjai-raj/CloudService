import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Services in Coimbatore | CloudCoimbatore",
  description: "Innovative digital solutions for your business. We provide cloud hosting, web development, and IT services in Coimbatore to grow your brand.",
  keywords: ["Cloud Services Coimbatore", "Web Development Coimbatore", "IT Solutions", "Digital Marketing", "Cloud Hosting", "VPS Hosting", "Coimbatore Tech"],
  openGraph: {
    title: "Cloud Services in Coimbatore | CloudCoimbatore",
    description: "Trusted partner for modern IT & digital solutions in Coimbatore.",
    url: "https://cloudcoimbatore.com",
    siteName: "CloudCoimbatore",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "CloudCoimbatore",
    "image": "https://cloudcoimbatore.com/logo.png",
    "description": "Premium cloud services and IT solutions in Coimbatore.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Park, Saravanampatti",
      "addressLocality": "Coimbatore",
      "addressRegion": "TN",
      "postalCode": "641035",
      "addressCountry": "IN"
    },
    "telephone": "+919876543210",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
