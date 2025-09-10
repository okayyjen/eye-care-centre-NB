import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from "react";
import "../../globals.css";
import { useTranslations } from 'next-intl';
export default function TeamPage() {
    const ponce = useTranslations('Ponce');
    const saad = useTranslations('Saad');
    const savoie = useTranslations('Savoie');
    const sekhavat = useTranslations('Sekhavat');
    const t = useTranslations('OurTeam');
    const lapierre = useTranslations('LaPierre');
    const white = useTranslations('White');


    const doctorList = [
        {
            name: sekhavat('name'),
            title: sekhavat('title'),
            img: "/images/sekhavat.png",
            link: "doctor-sekhavat"
        },
        {
            name: savoie('name'),
            title: savoie('title'),
            img: "/images/sekhavat.png",
            link: "doctor-savoie"
        },
        {
            name: saad('name'),
            title: saad('title'),
            img: "/images/sekhavat.png",
            link: "doctor-saad"
        },
        {
            name: ponce('name'),
            title: ponce('title'),
            img: "/images/sekhavat.png",
            link: "doctor-ponce"
        }
    ]

    const memberList = [
        {
            name: lapierre('name'),
            title: lapierre('title'),
            img: "/images/sekhavat.png",
            subtitle: t('subtitle3')
        },
        {
            name: white('name'),
            title: "",
            img: "/images/sekhavat.png",
            subtitle: t('subtitle4')

        }
    ]
    return (
        <div>
            <div className="div-with-bg mb-24">
                <div className="div-text-content ml-[50px] mb-[50px]">
                    <h1 className="text-5xl md:text-6xl font-bold text-white">{t('bannerTitle')}</h1>
                    <p className="text-lg md:text-xl text-white mt-[10px]">{t('bannerSubTitle')}</p>
                </div>
            </div>


            <div className="text-center my-8">
                <p className="text-sm md:text-base text-gray-600">{t('subtitle1')}</p>
                <p className="text-2xl md:text-3xl font-bold mt-2">{t('subtitle2')}</p>
            </div>


            <div className="flex justify-center px-4 sm:px-6 lg:px-8 py-6">
                <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 w-full max-w-[1600px]">
                    {doctorList.map((doctor, index) => (
                        <a key={index} href={doctor.link} className="hover:scale-105 transition-transform">
                            <div className="flex flex-col items-center text-center">
                                <Image 
                                    src={doctor.img} 
                                    alt={`${doctor.name} picture`} 
                                    className="w-full max-w-[320px] aspect-square object-cover rounded-2xl"
                                    width={320} 
                                    height={320} 
                                />
                                <h4 className="font-bold text-lg mt-2">{doctor.name}</h4>
                                <p className="text-gray-600">{doctor.title}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 py-6 max-w-[1200px] mx-auto justify-items-center">
                {memberList.map((member, index) => (
                    <div key={index} className="flex flex-col items-center text-center w-full max-w-[320px] hover:scale-105 transition-transform">
                        <div className="text-center my-8">
                            <p className="text-xl md:text-2xl font-bold mt-2 whitespace-nowrap">{member.subtitle}</p>
                        </div>
                        <Image 
                            src={member.img} 
                            alt={`${member.name} picture`} 
                            className="w-full aspect-square object-cover rounded-2xl"
                            width={320} 
                            height={320} 
                        />
                        <h4 className="font-bold text-lg mt-2">{member.name}</h4>
                        <p className="text-gray-600">{member.title}</p>
                    </div>
                ))}
            </div>






        </div>
    )
  }