import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    movieCard: {
        [theme.breakpoints.up('xs')]: {
            maxHeight: '63vw',
            minHeight: '63vw',
            maxWidth: '47vw',
            minWidth: '47vw',
        },
        [theme.breakpoints.up('sm')]: {
            maxHeight: '42vw',
            minHeight: '42vw',
            maxWidth: '28vw',
            minWidth: '28vw',
        },
        [theme.breakpoints.up('md')]: {
            maxHeight: '31vw',
            minHeight: '31vw',
            maxWidth: '22vw',
            minWidth: '22vw',
        },
        [theme.breakpoints.up('lg')]: {
            maxHeight: '22vw',
            minHeight: '22vw',
            maxWidth: '16vw',
            minWidth: '16vw',
        },
    },
}));
