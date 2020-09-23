import React, { useState } from 'react';
import useStyles from './Grid.styles'

const Grid = () => {
    const [cells] = useState(Array.from({ length: 2560 }));
    const classes = useStyles();
    return (
        <div className={classes.grid}>
            {cells.map((index) => <div key={index} className={classes.cell}></div>)}
        </div>
    )
};

export default Grid;