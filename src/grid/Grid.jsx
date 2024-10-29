import './Grid.css';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const tile = {
  width: '40%',
  flexShrink: 0,
  flexGrow: 1,
  margin: '0.3rem',
  backgroundColor: 'primary.main',
  color: 'primary.contrastText',
  paddingLeft: '0.5rem',
  paddingBottom: '1rem',
  alignContent: 'end',
};
const Grid = ({ theme }) => {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: 0.1 }}
      className="outer-layout"
    >
      <div className="child-row">
        {/* <motion.div className="tile"></motion.div>
        <motion.div className="tile">
          <label className="tile-text-big">
          <RouterLink to={'/login'} style={{ textDecoration: 'none', color: 'beige'}}> login</RouterLink>
          </label>
        </motion.div> */}
        <Card sx={tile} elevation={0}>
          <CardContent>
            {/* <Typography gutterBottom>Word of the Day</Typography>
            <Typography variant="h5" component="div">
              {'This is the first card'}
            </Typography>
            <Typography>adjective</Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography> */}
          </CardContent>
          <CardActions>
            <RouterLink to={'/login'}>
              <Typography>login</Typography>
            </RouterLink>
          </CardActions>
        </Card>
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div" color={'primary.contrastText'}>
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>
              {' '}
              <RouterLink to={'/register'} style={{ textDecoration: 'none' }}>
                register
              </RouterLink>
            </Typography>
          </CardActions>
        </Card>
      </div>
      <div className="child-row">
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div">
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="primary.main">register</Typography>
          </CardActions>
        </Card>
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div">
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="primary.main">messages</Typography>
          </CardActions>
        </Card>
      </div>
      <div className="child-row">
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div">
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="primary.main">outlook</Typography>
          </CardActions>
        </Card>
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div">
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="primary.main">music</Typography>
          </CardActions>
        </Card>
      </div>
      <div className="child-row">
        <Card sx={tile} elevation={0}>
          <CardContent>
            <Typography variant="h6" component="div">
              {'This is the first card'}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography color="primary.main">pictures</Typography>
          </CardActions>
        </Card>
      </div>
    </motion.div>
  );
};

export default Grid;
