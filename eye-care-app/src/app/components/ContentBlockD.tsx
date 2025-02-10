import React from 'react';
import DoctorCard from './DoctorCard';
import { DoctorCardsData } from '../data/general';

const ContentBlockD = () => {
    return (
        <div className="p-[70px] text-center">
            <h2 className="pb-5 text-xl">A NETWORK OF EXPERIENCED DOCTORS</h2>
            <h1>OUR DOCTORS</h1>
            <div className="flex flex-wrap justify-center gap-[90px]">
                
                {DoctorCardsData.map((card, index) => (
                    <DoctorCard key={index} name={card.name} text={card.text} />
                ))}

            </div>
            <button className="mt-10 border-3 border-none w-auto py-4 px-7 rounded-[5px] bg-[#8695C0] text-white">MEET OUR TEAM</button>


        </div>
    );
};

export default ContentBlockD;