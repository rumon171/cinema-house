import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    scrollTop: {
        position: 'fixed',
        bottom: '50px',
        right: '50px',
    },
    noResultsMessage: {
        textAlign: 'center',
    },
    loadingSpinner: {
        maxWidth: '70px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    searchResultsTitle: {
        margin: '70px',
    },
}));
