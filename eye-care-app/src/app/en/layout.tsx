import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import Reviews from "../components/Reviews";
import { NextIntlClientProvider } from "next-intl";
import enMessages from "../../../messages/en.json"; // static messages

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NB Eye Care Clinic",
  description: "NB Eye Care Clinic",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider locale="en" messages={enMessages}>
            <AppBar />
            <main>{children}</main>

            <div id="reviews-wrapper" className="bottom-0 w-full">
              <Reviews />
            </div>
            <div className="bottom-0 w-full">
              <Footer />
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
