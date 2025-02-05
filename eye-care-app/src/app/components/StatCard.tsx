import React from 'react';

interface StatCardProps {
  text: string;
  className: string; 
}

const StatCard: React.FC<StatCardProps> = ({ text, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-5 w-[300px] text-white ${className}`}>
        
        <p className="font-bold text-[20px] text-center p-5">{text}</p>

    </div>
  );
};

export default StatCard;
