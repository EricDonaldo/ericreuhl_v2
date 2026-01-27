import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`z-50 fixed right-0 top-20 h-screen bg-slate-800 shadow-lg transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      }`}
    >
      <div className="flex flex-col gap-4 p-4">
        <Link
          to="/"
          onClick={onClose}
          className="py-2 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="/about"
          onClick={onClose}
          className="py-2 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          About
        </Link>

        <Link
          to="/contact"
          onClick={onClose}
          className="py-2 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Contact
        </Link>

        <Link
          to="/projects"
          onClick={onClose}
          className="py-2 px-3 text-lg font-light text-white hover:text-sky-300 rounded-2xl hover:bg-slate-700 transition duration-300"
        >
          Projects
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
