import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Formik } from 'formik';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';
const Register = () => {
  return (
    <div>
      <motion.div>
        <Box sx={{ p: 2 }}>
          <Formik
            initialValues={{ userName: '', email: '', password: '', confirmPassword: '' }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
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
                    register
                  </Typography>
                  <TextField
                    id="userName"
                    placeholder="User name"
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.userName}
                  />
                  <TextField
                    id="email"
                    variant="outlined"
                    placeholder="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email}
                  <TextField
                    id="password"
                    variant="outlined"
                    placeholder="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <TextField
                    id="confirmPassword"
                    variant="outlined"
                    placeholder="confirm password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.confirmPassword}
                  />
                  <Button variant="contained" type="submit" disabled={isSubmitting}>
                    register
                  </Button>
                  <Alert severity="info">
                    Already have an account?. Please login
                    <RouterLink to={'/login'}> here.</RouterLink>
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

export default Register;
