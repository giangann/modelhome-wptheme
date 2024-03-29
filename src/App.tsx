import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { QueryClientProvider, useQuery } from 'react-query';
import { ToastContainer } from 'react-toastify';

import { API_PREFIX } from './constant';
import { queryClient } from './libs';
import { Router } from './routers';
import { theme } from './theme';

function App() {
  // fetch data of all Project when initial (sync when user interact with page)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
