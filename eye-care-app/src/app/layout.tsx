import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./footer.css";
import "./reviews.css";
import { Providers } from "./providers";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Testimonial from "./components/Testimonial";

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

          <div id="reviews-wrapper">
            <Reviews/>
          </div>
          <div id="footer-content">

              <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
