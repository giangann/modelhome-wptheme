import './App.css';

import { ThemeProvider } from '@mui/material';

import { Router } from './routers';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
