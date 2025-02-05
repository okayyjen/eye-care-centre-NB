import React from 'react';
import Image from 'next/image';

interface InfoCardProps {
  title: string;
  text: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, text }) => {
  return (
    <div className="flex items-start max-w-[600px] pb-5">
        <Image className="max-w-[50px] p-0"
            src={require("../images/visible_blue.png")}
            alt="logo"
            layout="responsive"
        />
        <div className="pl-2">
            <h1 className="text-[24px] text-[#384C84] font-bold">{title}</h1>
            <p className="text-[16px] leading-[1.5]">{text}</p>
        </div>
        
    </div>
  );
};

export default InfoCard;
