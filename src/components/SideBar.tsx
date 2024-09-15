import { features } from '@/features';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-react-studies.svg'

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-slate-400 p-4 sticky top-0 border border-slate-800">
      <div className="flex items-center">
        <img src={logo} alt="logo-react-studies" className='w-10 mr-4' />
        <h2 className="text-2xl text-neutral-100 font-bold">React Studies</h2>
      </div>
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