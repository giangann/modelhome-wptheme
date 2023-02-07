import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';

export const Layout = () => {
  return (
    <Box>
      <Outlet />
      <Footer />
    </Box>
  );
};
