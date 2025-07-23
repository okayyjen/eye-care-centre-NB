import React from 'react';
import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  text: string;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ name, text }) => {
  return (
    <div className="max-w-[350px] m-2.5 box-border text-center">
      <Image
        className="h-[300px] w-auto mx-auto"
        src={require("../images/doctor.png")}
        alt="doctor"
        height={100}
        width={0}
      />
      <h1 className="pt-2 text-[#384C84] font-bold pb-5 text-xl">{name}</h1>
      <p>{text}</p>
    </div>
  );
};

export default DoctorCard;
