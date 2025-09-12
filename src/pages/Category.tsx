import React from 'react';
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories';
import { products } from '../data/products';
import { ImageCard } from '../components/ImageCard';
import './Category.css';

export const Category: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const cat = categories.find(c => c.name === name);

  if (!cat) {
    return (
      <section className="category-page">
        <h2 className="category-title">FANT IKKE KATEGORI</h2>
        <p className="category-sub">Ingen kategori passer: {name}</p>
      </section>
    );
  }

  const filtered = products.filter(p => p.category === cat.name);

  return (
    <section className="category-page">
      <h1 className="category-title">{cat.label}</h1>
      <div className="image-grid category-grid">
        {filtered.length === 0 && <p className="category-sub">Ingen produkter i denne kategorien ennå.</p>}
        {filtered.map(p => (
          <ImageCard key={p.id} title={p.title} subtitle={p.subtitle} imageSrc={p.image} aspectRatio={4/5} />
        ))}
      </div>
    </section>
  );
};
