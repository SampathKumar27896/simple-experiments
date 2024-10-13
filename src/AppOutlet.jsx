import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const AppOutlet = ({ children }) => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 1, height: '4rem' }}>
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              dh
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              Photos
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="sm">{children ? children : <Outlet />}</Container>
      </Box>
    </Box>
  );
};
export default AppOutlet;
