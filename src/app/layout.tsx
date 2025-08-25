import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Urbanist } from "next/font/google";
import TransitionLayout from "@/components/ui/transition-layout";

import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Zachary Luheshi – Portfolio",
  description: "My personal portfolio showcasing my projects and experience.",
  icons: {
    icon: "/door-closed-fill.svg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.variable} ${urbanist.variable}`}
      >
        <TransitionLayout>{children}</TransitionLayout>
      </body>
    </html>
  );
}
