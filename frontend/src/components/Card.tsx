import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="m-5 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "35rem", border: "none" }}>
        <div className="formHeader">{title}</div>
        <div className="card-body text-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
