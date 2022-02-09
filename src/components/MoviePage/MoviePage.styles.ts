import { makeStyles } from '@material-ui/core';

export default makeStyles(theme => ({
    title: {
        fontSize: '2.3rem',
        fontWeight: 400,
        letterSpacing: '0.03em',
        marginTop: 0,
    },
    containerMoviePage: {
        marginTop: '100px',
    },
    similarMoviesTitle: {
        margin: '2.5rem 0',
    },
    moviePoster: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '70%',
            margin: '0 auto',
        },
        [theme.breakpoints.up('sm')]: {
            maxWidth: '85%',
            margin: '0 auto',
        },
        [theme.breakpoints.up('lg')]: {
            maxHeight: '655px',
        },
        'img &': {
            [theme.breakpoints.up('lg')]: {
                height: '100%',
            },
        },
    },
    content: {
        fontSize: '1rem',
        lineHeight: '1.75',
        letterSpacing: '0.01em',
    },
    contentImdbContainer: {
        backgroundColor: theme.palette.primary.main,
        padding: '2px',
        marginRight: '10px',
        '& a': {
            color: 'inherit',
            textDecoration: 'inherit',
        },
    },
    contentInfoSeparator: {
        margin: '0 10px',
    },
    contentMainParagraph: {
        textAlign: 'justify',
    },
    contentMainParagraphTitle: {
        textAlign: 'justify',
    },
}));
