import './App.css';

import {
  Box,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  Typography,
} from '@mui/material';
import { useState } from 'react';

import { Router } from './routers';

function App() {
  const [count, setCount] = useState(0);

  return <Router />;
}

export default App;
