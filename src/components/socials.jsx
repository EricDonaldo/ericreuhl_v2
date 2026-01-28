import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const socials = () => {
  return (
    <>
      <div className="bg-slate-800 w-full flex items-center justify-center py-4 text-slate-100">
        <div className="flex flex-col gap-4">
          <div className="group relative cursor-pointer">
            <a href="https://github.com/EricDonaldo" target="_blank">
              <FaGithub className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl hover:text-slate-300 hover:scale-115 transition duration-300" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-slate-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              GitHub
            </span>
          </div>
          <div className="group relative cursor-pointer">
            <a
              href="https://linkedin.com/in/eric-reuhl-96272a354"
              target="_blank"
            >
              <FaLinkedin className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl hover:text-slate-300 hover:scale-115 transition duration-300" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-slate-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              LinkedIn
            </span>
          </div>
          <div className="group relative cursor-pointer">
            <a href="https://wa.me/4917632203901" target="_blank">
              <FaWhatsapp className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl hover:text-slate-300 hover:scale-115 transition duration-300" />
            </a>
            <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 bg-slate-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
              WhatsApp
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default socials;
