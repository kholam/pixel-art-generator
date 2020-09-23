import React from 'react';

import useStyles from './App.styles';
import Grid from './components/Grid';
import ColorPicker from './components/ColorPicker'

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <ColorPicker />
      <Grid />
    </div>
  );
}

export default App;
