import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";



// Font imports removed in favor of Google Fonts Inter via globals.css

export const metadata: Metadata = {
  title: "Tehreem Arif - SQA Engineer Portfolio",
  description: "Portfolio of Tehreem Arif, a detailed-oriented SQA Engineer specializing in Manual and Automation Testing for Web and Mobile applications.",
};

import { Providers } from "@/components/Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
