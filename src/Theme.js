import { createTheme } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
      main2: blueGrey[100],
      contrastText: blueGrey[50],
      contrastText2: blueGrey[900],
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `"Inter", "Helvetica", "Arial", sans-serif`,
          fontWeight: 200,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'black',
          border: '1px solid beige',
          borderRadius: 0,
          fontFamily: 'Inter',
          fontWeight: 300,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontWeight: 300,
          borderRadius: 0,
          textTransform: 'none',
          fontSize: '1rem',
          color: 'black',
          backgroundColor: '#e7e7e7',
          fontWeight: 300,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Inter',
          fontWeight: 300,
          borderRadius: 0,
          textTransform: 'none',
          lineHeight: 1.75,
          fontSize: '1.5rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});

export default theme;
