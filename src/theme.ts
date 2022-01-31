import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#5FB9A6',
            dark: 'linear-gradient(-68deg, #151E27 , #335850)',
        },
        secondary: {
            main: '#C68A77',
        },
        error: {
            light: '#e5a0a0',
            main: '#CD5C5C',
            dark: '#992c2c',
        },
        text: {
            primary: '#20383C',
            secondary: '#151E27',
            hint: 'rgba(32, 56, 60, 0.7)',
        },
        background: {
            paper: '#fff',
        },
        common: {
            white: '#FFF',
        },
    },
    typography: {
        fontFamily: '"Work Sans"',
    },
});
export default theme;
