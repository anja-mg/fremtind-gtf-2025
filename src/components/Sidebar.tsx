import React from 'react';
import { NavLink } from 'react-router-dom';
import { categories } from '../data/categories';
import './Sidebar.css';

export const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <h4 className="sidebar-heading">Kategorier</h4>
      <ul className="sidebar-list">
        {categories.map(c => (
          <li key={c.name}>
            <NavLink to={`/category/${c.name}`}>{c.label}</NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
