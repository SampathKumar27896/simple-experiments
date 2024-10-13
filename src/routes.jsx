import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Register from './auth/register';
import Login from './auth/login';
import ErrorPage from './error';
import { useSelector } from 'react-redux';
import Home from './Home';
import { isAuthenticated } from './auth/AuthSlice';
import ProtectedRoute from './ProtectedRoute';
import App from './App';
import Grid from './grid/Grid';
import AppOutlet from './AppOutlet';
const Routes = () => {
  return (
    <Route errorElement={<ErrorPage />}>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/grid" element={<Grid/>} />
      </Route>
      <Route path="/" element={<AppOutlet />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  );
};
const Router = createBrowserRouter(createRoutesFromElements(Routes()));

export default Router;
