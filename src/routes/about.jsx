import React from 'react';
import CvTimeline from '../components/cvTimeline';

const about = () => {
  const age = Math.floor(
    (new Date() - new Date(2002, 1, 28)) / (1000 * 60 * 60 * 24 * 365.25)
  );

  const yearsSinceBankStart = (
    (new Date() - new Date(2024, 0, 1)) /
    (1000 * 60 * 60 * 24 * 365.25)
  ).toFixed(1);

  return (
    <div className="bg-slate-50  mx-6 flex-col justify-center text-justify mt-26">
      <div className="flex w-full items-center flex-col gap-4 text-[1.1rem]">
        <h1 className="text-6xl font-bold text-black text-center">
          About my career
        </h1>
        <p>
          Hey, my name is Eric, I am {age} years old and based in Frankfurt am
          Main. I began my professional journey in 2020 through a voluntary
          social year. Although I had already planned a career in the tech field
          early on, I wanted to gain practical life experience before fully
          committing to a technical path. During my voluntary service with
          Malteser Hilfsdienst e.V., I developed valuable personal and
          professional skills, including a strong sense of responsibility,
          teamwork, resilience, and the ability to work in a structured manner
          under pressure. These experiences continue to shape my approach to
          work and my ability to handle complex situations.
        </p>
        <p>
          Following my voluntary social year, I seamlessly transitioned into a
          vocational training program as an IT Specialist for System
          Integration. My apprenticeship at Deutsche Bank became a key
          foundation of my professional career. Due to my Abitur, the program
          was reduced to a duration of two and a half years from the outset.
          Successfully completing the apprenticeship allowed me to continue my
          career as a full-time employee at Deutsche Bank, where I was able to
          further develop both my technical and interpersonal skills and apply
          them in a professional environment.
        </p>
        <p>
          Since my permanent employment, {yearsSinceBankStart} years have
          passed. In my Technical Vendor Governance and File Storage Admin role
          , I gained comprehensive insights into working within a large
          corporate environment. Alongside building technical skills (skills
          link), I took on early responsibility as ITAO and learned how
          structured processes, cross-team collaboration, and professional
          communication function in a global organization. At the same time, I
          realized that I wanted to further develop my professional profile and
          explore additional opportunities within IT — particularly by deepening
          my passion for software development. For this reason, I decided to
          deliberately expand my qualifications and begin a Bachelor’s degree in
          Computer Science in 2026.
        </p>
        <p>
          To fully focus on my academic development and gain additional hands-on
          experience in different technical environments, I decided to pursue my
          studies full-time and explore new opportunities as a working student.
        </p>
      </div>
      <div className="flex flex-col w-full mt-12">
        <p className="text-center italic text-gray-400 underline">
          Click on the icons below to preview the corresponding certificate
        </p>
        <CvTimeline />
      </div>
    </div>
  );
};

export default about;
