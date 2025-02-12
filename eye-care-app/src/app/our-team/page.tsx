import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from "react";
import "../globals.css";
export default function TeamPage() {
    const doctor_list = [
        {
            name: "Dr. Houfar Sekhavat FRCSC",
            description: "Ophthalmologist",
            img: "/images/temp-image.png"
        },
        {
            name: "Dr. Isabelle Aucoin-Savoie",
            description: "Surgeon and Medical Ophthalmologist",
            img: "/images/temp-image.png"
        },
        {
            name: "Dr. Julien Saad MD FRCSC",
            description: "Surgeon & Medical Opthalmologist",
            img: "/images/temp-image.png"
        },
        {
            name: "Dr. Jose Ponce Martinez MD",
            description: "Anterior Segment Surgeon",
            img: "/images/temp-image.png"
        },
    ]

    const management_list = [
        {
            name: "Tatjana LaPierre",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/temp-image.png"
        },

    ]

    const coordinator_list = [
        {
            name: "Twila White",
            description: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit.",
            img: "/images/temp-image.png"
        },

    ]
    return (
        <div>
            <div className='div-with-bg'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fffcfcef] pt-4">Meet our Team</h1>
                    <h2 className="text-center text-[#fffcfcef] pt-2">Ipsum dolor sit amet</h2>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center mt-10">
                <div className="text-center">
                    <h2 className="pb-5 text-xl">A NETWORK OF EXPERIENCED DOCTORS</h2>
                    <h1>OUR DOCTORS</h1>
                </div>
                <div className="m-[2em] w-[70%] flex flex-wrap flex-2 gap-x-[3em] gap-y-[1em] justify-items-center items-center justify-center">
                    {doctor_list.map((doctor, index) => (
                        <div key={index} className="w-[20em] bg-white shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden max-w-[300px] m-4">
                            <img src={doctor.img} alt={doctor.name} className="w-full rounded-md" />
                            <a href="doctor-page-a">
                                <div className="p-4">
                                    <h4 className="font-bold">{doctor.name}</h4>
                                    <p>{doctor.description}</p>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap">
                    <div className="flex flex-col items-center">
                        <div className="text-center">
                            <h2 className="pb-5 text-xl">OUR MANAGEMENT TEAM</h2>
                        </div>
                        <div className="m-[2em] w-[70%] flex flex-wrap gap-x-[3em] gap-y-[1em] justify-items-center items-center justify-center">
                            {management_list.map((p, index) => (
                                <div key={index} className="w-[20em] bg-white shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden max-w-[300px] m-4">
                                    <img src={p.img} alt={p.name} className="w-full rounded-md" />
                                    <a href="doctor-page-a">
                                        <div className="p-4">
                                            <h4 className="font-bold">{p.name}</h4>
                                            <p>{p.description}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                    <div className="text-center">
                        <h2 className="pb-5 text-xl">INJECTION CO-ORDINATOR</h2>
                    </div>
                    <div className="m-[2em] w-[70%] flex flex-wrap gap-x-[3em] gap-y-[1em] justify-items-center items-center justify-center">
                        {coordinator_list.map((p, index) => (
                            <div key={index} className="w-[20em] bg-white shadow-md hover:shadow-lg transition-shadow rounded-md overflow-hidden max-w-[300px] m-4">
                                <img src={p.img} alt={p.name} className="w-full rounded-md" />
                                <a href="doctor-page-a">
                                    <div className="p-4">
                                        <h4 className="font-bold">{p.name}</h4>
                                        <p>{p.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    </div>

                </div>
                
            </div>


        </div>
    )
}