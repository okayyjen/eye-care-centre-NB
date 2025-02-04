import React from 'react';
import Image from 'next/image'
import DoctorCard from './DoctorCard';
import { DoctorCardsData } from '../data/general';

const ContentBlockD = () => {
    return (
        <div className="content-block-d">
            <h2 className="pb-5 text-xl">A NETWORK OF EXPERIENCED DOCTORS</h2>
            <h1>OUR DOCTORS</h1>
            <div id="doctors-block">
                
                {DoctorCardsData.map((card, index) => (
                    <DoctorCard key={index} name={card.name} text={card.text} />
                ))}

            </div>
            <button className="button-style-2">MEET OUR TEAM</button>


        </div>
    );
};

export default ContentBlockD;