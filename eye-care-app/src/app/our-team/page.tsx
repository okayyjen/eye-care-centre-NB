import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import React from "react";
import "../globals.css";
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
                    <h1 className='team-heading'>Meet our Team</h1>
                    <h2 className='team-subheading'>Ipsum dolor sit amet</h2>
                </div>
            </div>
        
            <div style={{ backgroundColor: '#F2F2F2', display: 'flex', justifyContent: 'center' }}>
                <div className="container">
                    {list.map((doctor, index) => (
                        <div className="card" key={index} style={{ maxWidth: '300px', margin: '1em' }}>
                            <img src={doctor.img} alt={doctor.name} style={{ width: '100%' }} />
                            <a href="doctor-page-a">
                                <div className="card-content">
                                    <h4><b>{doctor.name}</b></h4>
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