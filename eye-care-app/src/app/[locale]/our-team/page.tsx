import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from "react";
import "../../globals.css";
export default function TeamPage() {
    const list = [
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        },
        {
            name: "lorem ipsum",
            description: "dolor sit amet",
            img: "/images/temp-image.png"
        }

    ]
    return (
        <div>
            <div className='div-with-bg'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fffcfcef] pt-4">Meet our Team</h1>
                    <h2 className="text-center text-[#fffcfcef] pt-2">Ipsum dolor sit amet</h2>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="m-[2em] w-[70%] flex flex-wrap gap-x-[3em] gap-y-[1em] justify-items-center items-center justify-center">
                    {list.map((doctor, index) => (
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
            </div>
        </div>
    )
  }