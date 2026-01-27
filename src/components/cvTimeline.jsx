import React from 'react';
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

const cvTimeline = () => {
  return (
    <div className="my-auto py-4">
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
            <TimelineDot color="primary">
              <LaptopIcon />
            </TimelineDot>
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
            <TimelineDot color="primary">
              <LaptopIcon />
            </TimelineDot>
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
            <TimelineDot>
              <LocalLibraryIcon />
            </TimelineDot>
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
            <TimelineDot>
              <VolunteerActivismIcon />
            </TimelineDot>
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
            <TimelineDot>
              <SchoolIcon />
            </TimelineDot>
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
