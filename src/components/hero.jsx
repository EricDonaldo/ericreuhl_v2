import React from 'react';
import { ReactTyped } from 'react-typed';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.jpg';

const hero = () => {
  const navigate = useNavigate();
  return (
    <div
      className="bg-slate-50 text-emerald-500 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 pointer-events-none"></div>
      <div className="w-full mx-auto text-center flex flex-col justify-center pt-40 pb-20 relative z-10">
        <h2 className="text-xl font-semibold  text-blue-400 py-4 sm:text-2xl md:text-3xl lg:text-4xl">
          Trained IT Specialist for System Integration
        </h2>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Student Computer Science B.Sc.
        </h1>
        <div className="italic font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl ">
          Passionate about{' '}
          <ReactTyped
            className="text-blue-400 underline"
            strings={[
              'Computer Science',
              'Coding',
              'Web Development',
              'AI',
              'and more...',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="py-4 font-bold">
          <button
            onClick={() => navigate('/about')}
            className="hover:scale-115 transition duration-300 hover:bg-emerald-500 hover:text-white hover:cursor-pointer py-2 px-6 rounded-lg mx-auto border border-slate-400 shadow-2xl sm:px-10 md:px-14 lg:px-20"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
