"use client"
import "../homepage.css";
import { useTranslations } from 'next-intl';
import ImageBlock from "../components/ImageBlock";
import ContentBlockD from "../components/ContentBlockD";
import Card from "../components/Card";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";

export default function Home() {
  const t = useTranslations('Home');
  const t2 = useTranslations('HomePageCards');
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = params.locale || "en";
  return (
    <div id="home-page">
      <div className="relative flex items-end h-[30rem] mb-10 bg-cover bg-[center_20%] bg-no-repeat before:absolute before:inset-0 before:bg-[linear-gradient(to_right,rgba(0,0,0,0.8),rgba(0,0,0,0.3)),url('/images/HP_BANNER.jpg')] before:bg-cover before:bg-[top_20%] before:bg-no-repeat before:z-1">
        <div className="relative z-2 pb-10 pl-10 flex flex-col items-start">
          <Image
            src="/images/ECC_LOGO.png"
            alt="Company Logo"
            width={150}
            height={50}
            className="mb-4"
          />
          <h1 className="text-5xl text-[#fffcfcef] mb-4">{t('bannerTitle')}</h1>
          <h2 className="text-[#fffcfcef] text-xl w-1/2 pt-2">{t('bannerSubTitle')}</h2>
        </div>
      </div>
      <div className="flex justify-center items-stretch flex-wrap gap-5 p-5 pt-5">
        {t2.raw("cardContents").map(
          (card: { title: string; text: string; buttonTitle: string, link: string }, idx: number) => (
            <Card
              key={idx}
              title={card.title}
              text={card.text}
              link={currentLocale + "/" + card.link}
              buttonTitle={card.buttonTitle}
            />
          )
        )}
      </div>
      <ImageBlock />
      <ContentBlockD />
    </div>
  );
}