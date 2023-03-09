import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from '@mui/material';
import { QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';

import { queryClient } from './libs';
import { Router } from './routers';
import { theme } from './theme';

function App() {
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
