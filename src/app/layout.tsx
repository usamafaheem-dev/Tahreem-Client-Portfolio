import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Header";
import Footer from "@/components/Footer";



// Font imports removed in favor of Google Fonts Inter via globals.css

export const metadata: Metadata = {
  title: "Tehreem - SQA Engineer Portfolio",
  description: "Portfolio of Tehreem, a detailed-oriented SQA Engineer specializing in Manual and Automation Testing for Web and Mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >

        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
