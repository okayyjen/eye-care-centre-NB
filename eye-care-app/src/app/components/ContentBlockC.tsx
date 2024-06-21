import React from 'react';
import Image from 'next/image'
import InfoCard from './InfoCard';
import { InfoCardsData, InfoCardsData2 } from '../data/general';

const ContentBlockC = () => {
    return (
        <div className = "content-block-c">

            <div id="c-row-1">

                {InfoCardsData.map((card, index) => (
                    <InfoCard key={index} title={card.title} text={card.text} />
                ))}

            </div>
            
            <div id="c-row-2">

                {InfoCardsData.map((card, index) => (
                    <InfoCard key={index} title={card.title} text={card.text} />
                ))}

            </div>

        </div>
    );
};

export default ContentBlockC;