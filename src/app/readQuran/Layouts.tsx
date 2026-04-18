import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";



const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quran App",
  description: "Read Quran with translation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">    
        <Sidebar></Sidebar>  
        {children}
      </body>
    </html>
  );
}
