import Navbar from "@/components/Navbar";
import "./globals.css";
// import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lora } from "next/font/google";
import Footer from "@/components/Footer";

export const lora = Lora({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
});
export const myFont = localFont({ src: "./maiah-regular.ttf" });

// export const metadata: Metadata = {
//   title: "Gamma Creations Co., Ltd",
//   description: "gamma creations website",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" className={`${lora.className} `}>
      <body className="bg-[#F8F8F8] text-neutral-900">
        <div className="maintainance">Our website will be back soon!</div>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
