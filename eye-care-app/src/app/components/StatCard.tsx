import React from 'react';

interface StatCardProps {
  text: string;
  id: string; 
}

const StatCard: React.FC<StatCardProps> = ({ text, id }) => {
  return (
    <div className="stat-card" id={id}>
        
        <p className="stat-text">{text}</p>

    </div>
  );
};

export default StatCard;
