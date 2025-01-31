import React from 'react';
import './ProductCard.css';

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  description,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
