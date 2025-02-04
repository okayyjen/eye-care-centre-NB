import React from 'react';
import InfoCard from './InfoCard';
import { InfoCardsData, InfoCardsData2 } from '../data/general';

const ContentBlockC = () => {
    return (
        <div className = "flex justify-center py-[80px]">
            <div>
                {InfoCardsData.map((card, index) => (
                    <InfoCard key={index} title={card.title} text={card.text} />
                ))}

            </div>
            <div>
                {InfoCardsData.map((card, index) => (
                    <InfoCard key={index} title={card.title} text={card.text} />
                ))}
            </div>
        </div>
    );
};

export default ContentBlockC;