import { features } from '@/features';
import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-slate-400 p-4 sticky top-0 border border-slate-800">
      <h2 className="text-xl font-bold mb-4">React Studies</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {features.map((feature) => (
            <li key={feature.path} className="mb-2">
              <Link
                to={feature.path}
                className="hover:text-slate-300"
              >
                {feature.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};