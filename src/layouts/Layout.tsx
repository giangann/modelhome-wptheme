import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
