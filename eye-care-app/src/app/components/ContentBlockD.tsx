"use client";
import React from 'react';
import DoctorCard from './DoctorCard';
import { DoctorCardsData } from '../data/general';
import Link from 'next/link';
import { usePathname, useParams } from "next/navigation";

const ContentBlockD = () => {
    const params = useParams();
    const currentLocale = params.locale || "en";
    return (
        <div className="p-[70px] text-center">
            <h2 className="pb-5 text-xl">A NETWORK OF EXPERIENCED DOCTORS</h2>
            <h1>OUR DOCTORS</h1>
            <div className="flex flex-wrap justify-center gap-[90px]">
                
                {DoctorCardsData.map((card, index) => (
                    <DoctorCard key={index} name={card.name} text={card.text} />
                ))}

            </div>

            <button className="mt-10 border-3 border-none w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">            
                <Link href={`/${currentLocale}/our-team`} className=" hover:no-underline">
                    MEET OUR TEAM
                </Link>
            </button>


        </div>
    );
};

export default ContentBlockD;