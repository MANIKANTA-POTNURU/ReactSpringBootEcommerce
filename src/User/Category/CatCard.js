import React from 'react';

const CatCard = ({ title, imageUrl }) => {
  return (
    <div className="ecommerce-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default CatCard;
