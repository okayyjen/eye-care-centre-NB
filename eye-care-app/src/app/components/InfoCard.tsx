import React from 'react';
import Image from 'next/image';

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div className="card-c">
        <Image className="block-c-image"
            src={require("../images/visible_blue.png")}
            alt="logo"
            layout="responsive"
        />
        <div className="block-c-text">
            <h1 className="block-c-title">{title}</h1>
            <p>{text}</p>
        </div>
        
    </div>
  );
};

export default InfoCard;
