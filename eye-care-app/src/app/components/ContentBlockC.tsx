import React from 'react';
import InfoCard from './InfoCard';
import { InfoCardsData, InfoCardsData2, statCardsData } from '../data/general';
import StatCard from './StatCard';

const ContentBlockC = () => {
    return (
        <div className = "flex justify-center py-[80px]">
                  <div className="flex justify-center items-center flex-wrap p-5">
        {statCardsData.map((card, index) => (
          <StatCard
            key={index}
            text={card.text}
            className={card.className}
          />
        ))}
      </div>
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