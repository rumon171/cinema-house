import React, { useEffect } from 'react';
import HomePageContainer from './components/Containers/HomePageContainer';
import { fetchAllMovies } from './services/movies.service';
import MoviePageContainer from './components/Containers/MoviePageContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showMoviesAtHomePage } from './actions';
import Profile from './components/Profile/Profile';
import useStyles from './App.styles';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

function App() {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };

    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        fetchAllMovies('1')
            .then(movies => dispatch(showMoviesAtHomePage(movies)))
            .catch(() => dispatch(showMoviesAtHomePage([])));
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.root}>
                <div className={classes.container}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/profile" element={<Profile></Profile>} />
                            <Route path="/movie/:movieid" element={<MoviePageContainer />} />
                            <Route path="/" element={<HomePageContainer></HomePageContainer>} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </ThemeProvider>
    );
}
export default App;
