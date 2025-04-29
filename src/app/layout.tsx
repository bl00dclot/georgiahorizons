import Navbar from "./ui/NavBar/Navbar";
import type { Metadata } from "next";
import "./ui/globals.css";
import { lora, manrope } from "./ui/fonts"

export const metadata: Metadata = {
  title: "Georgia Horizons",
  description: "Tourism opportunities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${lora.variable} ${manrope.variable} antialiased`}> 
        <Navbar/>
                <div className="flex justify-center pt-16">
            <div className="w-5/6 bg-white">
                <div className="p-5">
                {children}
                </div>
                </div>
            </div>
      </body>
    </html>
  );
}
