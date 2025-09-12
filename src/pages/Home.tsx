import React from 'react';

// Resolve hero image in /src/bilder/hjem
const heroImg = new URL('../bilder/hjem/Girl Tech Fest Forside.png', import.meta.url).href;

export const Home: React.FC = () => {
  return (
    <section className="hero-home">
      <div className="hero-inner">
        <img className="hero-image" src={heroImg} alt="Girl Tech Fest 2025 forside" />
        <h1 className="hero-title">Lag din egen nettside med Fremtind 🩷</h1>
      </div>
    </section>
  );
};
