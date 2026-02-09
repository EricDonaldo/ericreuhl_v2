import React from 'react';
import { useLocation } from 'react-router-dom';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import SchoolIcon from '@mui/icons-material/School';
import Typography from '@mui/material/Typography';
import LaptopIcon from '@mui/icons-material/Laptop';
import Tooltip from '@mui/material/Tooltip';

const cvTimeline = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <div className="my-auto py-4 flex flex-col">
      {isAboutPage && (
        <a href="/pdfs/Lebenslauf.pdf" target="_blank" className="mx-auto">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center cursor-pointer">
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download CV</span>
          </button>
        </a>
      )}
      <Timeline position="alternate">
        <TimelineItem className="hover:scale-115 transition duration-300 hover:bg-slate-100">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            From Oct 2026
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Tooltip title="No file available yet">
              <TimelineDot color="primary">
                <LaptopIcon />
              </TimelineDot>
            </Tooltip>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Computer Science B.Sc
            </Typography>
            <Typography>
              Student Frankfurt University of applied sciences
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="hover:scale-115 transition duration-300 hover:bg-slate-100">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            Jan. 2024 - Today
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <Tooltip title="No file available yet">
              <TimelineDot color="primary">
                <LaptopIcon />
              </TimelineDot>
            </Tooltip>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Technology Service Analyst
            </Typography>
            <Typography>Deutsche Bank AG</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="hover:scale-115 transition duration-300 hover:bg-slate-100">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Aug 2021 - Jan 2024
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <a
              href="/pdfs/ausbildung.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <TimelineDot sx={{ cursor: 'pointer' }}>
                <LocalLibraryIcon />
              </TimelineDot>
            </a>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              IT Specialist for System Integration
            </Typography>
            <Typography>Apprenticeship - Deutsche Bank AG</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="hover:scale-115 transition duration-300 hover:bg-slate-100">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Sept. 2020 - May 2021
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <a
              href="/pdfs/sani_zeugnis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <TimelineDot sx={{ cursor: 'pointer' }}>
                <VolunteerActivismIcon />
              </TimelineDot>
            </a>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Freiwilliges Soziales Jahr
            </Typography>
            <Typography>Malteser Hilfsdienst e.V.</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem className="hover:scale-115 transition duration-300 hover:bg-slate-100">
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Jan 2012 - Jan 2020
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <a
              href="/pdfs/Abiturzeugnis_Eric_Reuhl.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <TimelineDot sx={{ cursor: 'pointer' }}>
                <SchoolIcon />
              </TimelineDot>
            </a>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography variant="h6" component="span">
              Abitur
            </Typography>
            <Typography>Helmholtzschule</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default cvTimeline;
