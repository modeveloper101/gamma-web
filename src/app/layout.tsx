import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  variable: "--font-lato",
});
export const myFont = localFont({ src: "./maiah-regular.ttf" });

export const metadata: Metadata = {
  title: "Gamma Creations Co., Ltd",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.className} `}>
      <body className="bg-[#F8F8F8] text-[#404C51]">
        <div className="maintainance">Our website will be back soon!</div>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
