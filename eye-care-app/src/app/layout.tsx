import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Footer from "./components/Footer";
import AppBar from "./components/AppBar";
import Reviews from "./components/Reviews";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NB Eye Care Clinic",
  description: "NB Eye Care Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <AppBar />
          <main>{children}</main>

          <div id="reviews-wrapper" className="bottom-0 w-full">
              <Reviews/>
          </div> 
          <div className="bottom-0 w-full">
                <Footer/>
          </div>

        </Providers>
      </body>
    </html>
  );
}
