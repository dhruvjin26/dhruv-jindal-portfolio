import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Dhruv Jindal | Personal Portfolio",
  description: "Premium personal website for Dhruv Jindal, IIT Madras graduate and incoming MBA student at XIMB.",
  keywords: ["Dhruv Jindal", "IIT Madras", "XIMB", "MBA", "personal portfolio"],
  openGraph: {
    title: "Dhruv Jindal",
    description: "IIT Madras Graduate | Incoming MBA Student at XIMB",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${manrope.variable} bg-ink font-sans text-snow antialiased`}>
        {children}
      </body>
    </html>
  );
}
