import "../globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../providers";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import Reviews from "../components/Reviews";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NB Eye Care Clinic",
  description: "NB Eye Care Clinic",
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale} className="light">
      <body className={inter.className}>
        <Providers>
          <NextIntlClientProvider messages={messages}>
            
            {/* <AppBar /> */}
            <main>{children}</main>

            <div id="reviews-wrapper" className="bottom-0 w-full">
                <Reviews/>
            </div> 
            <div className="bottom-0 w-full">
                  <Footer/>
            </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}