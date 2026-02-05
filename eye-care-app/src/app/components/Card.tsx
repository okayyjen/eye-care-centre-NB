import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  text: string;
  link: string;
  buttonTitle: string;
}

const Card: React.FC<CardProps> = ({ title, text, link, buttonTitle }) => {
  return (
    <div className="flex flex-col w-[285px] p-5 bg-[#384C84] text-white">
      <div className="h-[70px] flex justify-center items-center">
        <Image
          src={require("../images/visible.png")}
          alt="logo"
          width={50}
          height={50}
        />
      </div>
      <h1 className="mt-4 mb-3 text-xl text-center">{title}</h1>
      <p className="text-center flex-grow">{text}</p>
      <a href={link} className="mt-auto flex justify-center">
        <button className="border-2 w-full border-white py-4 px-7 rounded-[5px] mt-4 ">
          {buttonTitle}
        </button>
      </a>
    </div>
  );
};

export default Card;
