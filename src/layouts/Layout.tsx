import MenuIcon from '@mui/icons-material/Menu';
import { Box, IconButton } from '@mui/material';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { CustomDrawer } from '../components';
import { PhoneFloatIcon, ZaloFloatIcon } from '../components/icon';
import { orange } from '../libs';
import { Footer } from './Footer';
import { Header } from './Header';

export const Layout = () => {
  return (
    <Box>
      <Header />
      <Outlet />
      <Footer />
      <ZaloFloatIcon />
      <PhoneFloatIcon />
    </Box>
  );
};
