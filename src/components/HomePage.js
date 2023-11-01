import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const NavigationBar = () => {

    return (
        <AppBar position="static">
            <Toolbar>
                <Button variant="contained" color="primary">
                    Home
                </Button>
                <Button variant="outlined" color="secondary">
                    About
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;
