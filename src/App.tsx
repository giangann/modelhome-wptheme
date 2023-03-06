import './App.css';

import { ThemeProvider } from '@mui/material';

import { Router } from './routers';
import { theme } from './theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './libs';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
