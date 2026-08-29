import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Caveat } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "For Shibya · From Aditya ❤️",
  description: "A private, cinematic romantic love story custom built by Aditya for Shibya.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable} ${caveat.variable} dark scroll-smooth`}>
      <body className="bg-[#07050a] text-[#f8f4ee] antialiased selection:bg-[#2a0a14] selection:text-[#f8f4ee] overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
