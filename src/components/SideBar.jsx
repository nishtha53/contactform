// Sidebar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar= () => {
  return (
    <div className="bg-sky-400 text-white h-screen w-64 py-4 px-2">
      <h2 className="text-2xl font-bold mb-4">Contact App</h2>
      <nav>
        <ul>
          <li className="mb-2">
            <Link to="/" className="block text-sm hover:underline">
              Contacts
            </Link>
          </li>
          <li className="mb-2">
            <Link to="/charts-maps" className="block text-sm hover:underline">
              Charts & Maps
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;


