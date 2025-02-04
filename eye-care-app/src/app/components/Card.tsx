import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  text: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, text, link }) => {
  return (
    <div className="flex flex-col items-center justify-center p-5 w-[285px] bg-[#384C84] text-white">
      <Image 
        className="max-w-[50px] py-5 pt-5 pb-[35px]"
        src={require("../images/visible.png")}
        alt="logo"
        layout="responsive"
      />
      <h1 className="pb-5 text-xl">{title}</h1>
      <p className="text-center">{text}</p>
      <a href={link}>
        <button className="button-style-1">LOREM IPSUM</button>
      </a>
    </div>
  );
};

export default Card;
