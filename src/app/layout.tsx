import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground";
import Navbar from "@/components/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Your Portfolio",
    template: "%s | Your Portfolio",
  },
  description: "developer, designer, and creator",
  openGraph: {
    title: "Your Portfolio",
    description: "developer, designer, and creator",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Portfolio",
    description: "developer, designer, and creator",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <SpaceBackground />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
