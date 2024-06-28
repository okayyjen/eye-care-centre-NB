import React from 'react';
import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  text: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, text }) => {
  return (
    <div className="doctor-card">
        <Image className="doctor-image"
            src={require("../images/doctor.png")}
            alt="logo"
            layout="responsive"
        />
        <h1 className="block-title">{name}</h1>
        <p>{text}</p>
    </div>
  );
};

export default DoctorCard;
