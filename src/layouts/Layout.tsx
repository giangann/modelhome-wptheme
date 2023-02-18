import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CustomDrawer } from '../components';
import MenuIcon from '@mui/icons-material/Menu';

import { Footer } from './Footer';
import { Header } from './Header';
import { orange } from '../libs';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};
