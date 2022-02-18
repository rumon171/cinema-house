import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    scrollTop: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        '& button': {
            backgroundColor: theme.palette.primary.light,
            //backgroundColor: '#20c689',
        },
    },
}));
