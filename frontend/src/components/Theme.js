import { createTheme } from '@mui/material/styles';
import { green, red, grey } from '@mui/material/colors';

const THEME = createTheme({
  palette: {
    primary: {
      main: '#2E382E',
    },
    secondary: {
      main: '#50C9CE',
    },
    tertiary: {
      main: '#72A1E5',
    },
    error: {
      main: red[400],
    },
    success: {
      main: green[400],
    },
    neutral: {
      main: grey[600],
    },
  },
});

export default THEME;