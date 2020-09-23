import React from 'react';
import useStyles from './ColorPicker.styles'

const ColorPicker = () => {
    const classes = useStyles();
    return (
        <div className={classes.tools}>
            <div className={classes.colorPicker}>
                <label>Color:</label>
                <input type="color" value="#f6b73c" /> 
            </div>
        </div>
    )
};

export default ColorPicker;