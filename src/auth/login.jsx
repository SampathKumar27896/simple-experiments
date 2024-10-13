import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Formik } from 'formik';
import { Link as RouterLink, redirectDocument, Navigate } from 'react-router-dom';
import { login } from './AuthSlice';
import { updateIsLoading, updateIsMessageOpen, updateMessage, isMessageOpen } from '../app/AppSlice';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
const Login = () => {
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      {auth && <Navigate to="/grid" />}
      <motion.div initial={{ x: 20 }} animate={{ x: 0 }} transition={{ type: 'tween', duration: 0.5 }}>
        <Box sx={{ p: 2 }}>
          <Formik
            initialValues={{ userName: '', password: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.userName || !values.password) {
                errors.email = 'Required';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              // dispatch(updateIsLoading(true));
              setTimeout(() => {
                dispatch(login({ userName: values.userName, password: values.password }));
                setSubmitting(false);
                dispatch(updateMessage({ message: 'Login is successful' }));
                dispatch(updateIsMessageOpen({ isMessageOpen: true }));
                setAuth(true);
              }, 1000);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <Typography variant="h1" gutterBottom>
                    login
                  </Typography>
                  <TextField
                    id="userName"
                    variant="outlined"
                    placeholder="user name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  <TextField
                    id="password"
                    variant="outlined"
                    type="password"
                    placeholder="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Button variant="contained" type="submit" disabled={isSubmitting}>
                    login
                  </Button>
                  <Alert severity="info">
                    New to this website?. Please register
                    <RouterLink to="/register"> here. </RouterLink>
                  </Alert>
                </Stack>
              </form>
            )}
          </Formik>
        </Box>
      </motion.div>
    </div>
  );
};

export default Login;
