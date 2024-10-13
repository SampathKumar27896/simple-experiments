import { createTheme } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: deepPurple,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Segoe UI Light',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: 'black',
          border: '1px solid beige',
          borderRadius: 0,
          fontFamily: 'Segoe UI Light',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
            fontFamily: 'Segoe UI Light',
            fontWeight: 300,
            borderRadius: 0,
            textTransform: 'none',
            fontSize: '1rem',
            color: 'black',
            backgroundColor: '#e7e7e7'
        },
      },
    },
    MuiButton: {
        styleOverrides: {
          root: {
              fontFamily: 'Segoe UI Light',
              fontWeight: 300,
              borderRadius: 0,
              textTransform: 'none',
              lineHeight: 1.75,
              fontSize: '1.5rem'
          },
        },
      },
  },
});

export default theme;
