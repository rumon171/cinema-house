import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
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
