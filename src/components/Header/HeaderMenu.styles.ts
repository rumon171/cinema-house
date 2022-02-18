import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    container: {
        backgroundColor: '#414252',
        padding: '70px 10px 20px',
        marginBottom: '-30px',
        display: 'flex',
        justifyContent: 'center',
        ['@media (min-width:301px)']: {
            paddingTop: '90px',
            paddingLeft: '15px',
            paddingRight: '15px',
        },
        ['@media (min-width:391px)']: {
            paddingTop: '70px',
        },
        ['@media (min-width:601px)']: {
            paddingTop: '80px',
        },
    },
    filterButton: {
        backgroundColor: theme.palette.primary.light,
        margin: '15px',
        '&:hover': {
            backgroundColor: '#088758',
        },
    },
}));
