import React from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  text: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, text, link }) => {
  return (
    <div className="card-a">
      <Image 
        className="eye-icon"
        src={require("../images/visible.png")}
        alt="logo"
        layout="responsive"
      />
      <h1 className="block-title">{title}</h1>
      <p>{text}</p>
      <a href={link}>
        <button className="button-style-1">LOREM IPSUM</button>
      </a>
    </div>
  );
};

export default Card;
