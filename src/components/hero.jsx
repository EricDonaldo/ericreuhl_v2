import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className="text-slate-800">
      <div className="w-full mx-auto text-center flex flex-col justify-center py-40">
        <h2 className="text-xl font-semibold  text-blue-400 py-4 sm:text-2xl md:text-3xl lg:text-4xl">
          IT Specialist for System Integration
        </h2>
        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
          Computer Science B.Sc. Student
        </h1>
        <div className="italic font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Passionate about{' '}
          <ReactTyped
            className="text-blue-400 underline"
            strings={[
              'Computer Science',
              'Coding',
              'Web Development',
              'AI',
              'Machine Learning',
              'and more...',
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="py-4 font-bold">
          <button className="hover:bg-slate-800 hover:text-white hover:cursor-pointer py-2 px-6 rounded-lg mx-auto border border-slate-400 shadow-2xl sm:px-10 md:px-14 lg:px-20">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
