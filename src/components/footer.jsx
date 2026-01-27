import React from 'react';
import { Link } from 'react-router-dom';

const footer = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center py-6 bg-slate-800 text-white">
        <p className="text-slate-500 text-xs">
          © {new Date().getFullYear()} Eric Reuhl. All rights reserved.
        </p>
        <p className="text-slate-500 text-xs">No cookies, no analytics.</p>
        <Link 
          to="/impressum" 
          className="text-slate-400 text-xs hover:text-slate-200 transition duration-300 mt-2"
        >
          Impressum
        </Link>
      </div>
    </>
  );
};

export default footer;
