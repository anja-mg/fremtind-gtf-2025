import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound: React.FC = () => (
  <section style={{ padding: '2rem' }}>
    <h2>Fant ikke siden 😕</h2>
    <p>Oi! Denne siden finnes ikke. Kanskje du trykker feil adresse?</p>
    <p><Link to="/">Til forsiden</Link></p>
  </section>
);
