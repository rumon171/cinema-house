import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    topBar: {
        backgroundColor: theme.palette.primary.main,
        '& a': {
            textDecoration: 'none',
            color: theme.palette.common.white,
        },
    },
    topBarTitle: {
        fontSize: '1.5rem',
        fontWeight: 500,
    },
    searchField: {
        marginLeft: 'auto',
        marginRight: '1.5rem',
    },
}));
