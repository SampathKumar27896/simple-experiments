import './Grid.css';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Grid = () => {
  return (
    <motion.div
      initial={{ x: 50 }}
      animate={{ x: 0 }}
      transition={{ type: 'tween', duration: 0.5 }}
      className="outer-layout"
    >
      <div className="child-row">
        <motion.div className="tile"></motion.div>
        <motion.div className="tile">
          <label className="tile-text-big">
          <RouterLink to={'/login'} style={{ textDecoration: 'none', color: 'beige'}}> login</RouterLink>
          </label>
        </motion.div>
      </div>
      <div className="child-row">
      <motion.div className="tile">
          <label className="tile-text-big">
          <RouterLink to={'/register'} style={{ textDecoration: 'none', color: 'beige'}}> register</RouterLink>
          </label>
        </motion.div>
        <motion.div className="tile" transition={{ duration: 1, ease: 'easeInOut' }}>
          <label className="tile-text-big">messages</label>
        </motion.div>
      </div>
      <div className="child-row">
        <motion.div className="tile" transition={{ duration: 0.6, ease: 'easeInOut' }}>
          <label className="tile-text-big">outlook</label>
        </motion.div>
        <motion.div className="tile2" transition={{ duration: 0.5, ease: 'easeInOut' }}>
          <label className="tile-text-big">music</label>
        </motion.div>
      </div>
      <div className="child-row">
        <motion.div className="rectangle-tile" transition={{ duration: 0.6, ease: 'easeInOut' }}>
          <label className="tile-text-big">Pictures</label>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Grid;
