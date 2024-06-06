import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./footer.css";
import "./reviews.css";
import "./imageblock.css"
import "./contentblocka.css"
import { Providers } from "./providers";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import ImageBlock from "./components/ImageBlock";
import ContentBlockA from "./components/contentBlockA";


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
          <div id="home-page">

            {/*TODO FIX THESE ID NAMES */}
            <div id="content-2">
              <ContentBlockA/>
            </div>

            <div id="content-1">
              <ImageBlock/>
            </div>

            <div id="reviews-wrapper">
              <Reviews/>
            </div>

            <div id="footer-content">
                <Footer />
            </div>  

          </div>

        </Providers>
      </body>
    </html>
  );
}
