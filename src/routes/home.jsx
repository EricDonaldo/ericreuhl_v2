import React from 'react';
import Hero from '../components/hero';
import Socials from '../components/socials';
import LatestBlogs from '../components/latestBlogs';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const home = () => {
  return (
    <>
      <Hero />
      <Socials />
      <LatestBlogs />
    </>
  );
};

export default home;
