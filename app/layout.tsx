import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | YRP Designs",
  description: "Constuction website of yrp designs.",
  openGraph: {
    title: "Home | YRP Designs",
    description: "Constuction website of yrp designs.",
  },
};

export function addProductJsonLd() {
  return {
    __html: `{
      "@context": "https://schema.org",
      "@type": "Organization",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Hyderabad",
        "postalCode": "",
        "streetAddress": "Hyderabad"
      },
      "email": "reddeppa(at)yrpdesigns.in",
      
      "alumni": [
        {
          "@type": "Person",
          "name": "Reddeppa"
        },
      ],
      "name": "yrpdesigns",
      "telephone": "+91 8555040965"
    }
`,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
