import { Box } from '@mui/material';

import { AboutUs } from './AboutUs';
import { Banner } from './Banner';
import { OurProjects } from './OurProjects';
import { OurServices } from './OurServices';

export const Home = () => {
  return (
    <Box>
      <Banner />
      <AboutUs />
      <OurServices />
      <OurProjects />
    </Box>
  );
};
