import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    container: {
        backgroundColor: '#414252',
        padding: '70px 10px 20px',
        marginBottom: '-30px',
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
        backgroundColor: '#20c689',
    },
}));
