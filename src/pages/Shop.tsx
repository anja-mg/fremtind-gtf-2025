import React from 'react';
import { ImageCard } from '../components/ImageCard';
import { products } from '../data/products';
import './Shop.css';

export const Shop: React.FC = () => {
  return (
    <section className="shop-page">
      <h1 className="shop-title">Min butikk</h1>
      <div className="image-grid shop-grid">
        {products.map(p => (
          <ImageCard
            key={p.id}
            title={p.title}
            subtitle={p.subtitle}
            imageSrc={p.image}
            aspectRatio={4/5}
            onClick={() => console.log('Klikket', p.title)}
          />
        ))}
      </div>
    </section>
  );
};
