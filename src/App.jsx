import './App.css';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import  AppOutlet  from './AppOutlet';
import { useSelector } from 'react-redux';
import { isAuthenticated } from './auth/AuthSlice';
import Login from './auth/login';
import Register from './auth/register';
import AppSnackBar from './Snackbar';
import { useLocation, redirectDocument, Navigate } from 'react-router-dom';
import Home from './Home';
function App() {
  const isAuth = useSelector(isAuthenticated);
  const location = useLocation();
  console.log(isAuth, location);
  return (
    <AppOutlet>
      <AppSnackBar />
     {isAuth ? <Outlet/> : <Navigate to='/login' replace/>}
    </AppOutlet>
  );
}

export default App;
