import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    root: {
        color: theme.palette.primary.contrastText,
        fontSize: '1.5rem',
    },
    container: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingTop: '5px',
        paddingBottom: '5px',
        // backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        minWidth: '100vw',
    },
    typographyBase: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 400,
    },
}));
