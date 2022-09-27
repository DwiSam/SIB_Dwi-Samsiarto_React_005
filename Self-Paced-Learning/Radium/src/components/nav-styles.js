import config from './config-styles.js';

const btn = {
  flex: 1,
  height: config.imageHeight,
  padding: 20,
  fontSize: 50,
  background: 'transparent',
  color: '#fff',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)',
  border: 'none',
  outline: 0,
  cursor: 'pointer',
  userSelect: 'none',
  ':hover':{
    transition: 'all 1s',
    color: '#8c9ea3'
  }
};

const prev = {
  ...btn,
  textAlign: 'left'
};
const next = {
  ...btn,
  textAlign: 'right'
};
export default {
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    display: 'flex'
  },
  prev,
  next
};
