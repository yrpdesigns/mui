import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import "./globals.css";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | YRP Designs",
  description: "Constuction website of yrp designs.",
  openGraph: {
    title: "Home | YRP Designs",
    description: "Constuction website of yrp designs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="google-site-verification"
          content="x_HQhGKbrIIOO8frAMRcLc7DXzDDub7YDCr1KZegQuc"
        />
      </Head>
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}
