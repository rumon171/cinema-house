import { Button } from '@material-ui/core';
import React from 'react';
import useStyles from './HeaderMenu.styles';

const HeaderMenu: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <Button variant="outlined" className={classes.filterButton}>
                    Release date
                </Button>
                <Button variant="outlined" className={classes.filterButton}>
                    Genre
                </Button>
            </div>
        </>
    );
};

export default HeaderMenu;
