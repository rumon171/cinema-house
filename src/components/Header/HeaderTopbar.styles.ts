import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    topBar: {
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('xs')]: {
            paddingLeft: '10px',
            paddingRight: '10px',
        },
        ['@media (min-width:300px)']: {
            paddingLeft: '16px',
            paddingRight: '16px',
        },
        '& a': {
            textDecoration: 'none',
            color: theme.palette.common.white,
        },
    },
    topBarTitle: {
        fontWeight: 500,
        [theme.breakpoints.up('xs')]: {
            fontSize: '0.8rem',
        },
        ['@media (min-width:300px)']: {
            fontSize: '1.1rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem',
        },
    },
    searchField: {
        marginLeft: 'auto',
        marginRight: '1.5rem',
    },
}));
