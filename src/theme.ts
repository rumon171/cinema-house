import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#aa2876',
            contrastText: '#fff',
            dark: 'linear-gradient(-68deg, #151E27 , #335850)',
        },
        secondary: {
            main: '#C68A77',
        },
        error: {
            light: '#e5a0a0',
            main: '#CD5C5C',
        },
        text: {
            primary: '#fff',
        },
        background: {
            default: '#272838',
        },
        common: {
            white: '#fff',
        },
    },
    typography: {
        fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
});
export default theme;
