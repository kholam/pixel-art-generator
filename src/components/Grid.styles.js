import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '80vw',
    height: '50vw',
    border: '2px solid black',
  },
  cell: {
    border: '2px solid black',
  },
});