import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(40, 1fr)',
    gridTemplateColumns: 'repeat(64, 1fr)',
    width: '100vmin',
    height: '70vmin',
    outline: '2px solid black',
  },
  cell: {
    border: '2px solid black',
    cursor: 'pointer',
    background: '#fff',
    '&:hover': {
      transform: 'scale(1.1)',
    }
  },
});