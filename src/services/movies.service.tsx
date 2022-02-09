import noImage from '../images/no-image-available.png';

const movieApiBaseUrl = 'https://api.themoviedb.org/3';
const posterBaseUrl = 'https://image.tmdb.org/t/p/w300';
interface Genre {
    id: number;
    name: string;
}
interface Country {
    iso_3166_1: string;
    name: string;
}
export interface Movie {
    id: number;
    title: string;
    vote_average?: number;
    overview?: string;
    poster_path?: string;
    release_date?: string;
    runtime?: number;
    budget?: number;
    revenue?: number;
    genres?: Genre[];
    production_countries?: Country[];
}

export async function fetchSelectedMovie(movieId: number): Promise<Movie> {
    return await fetch(`${movieApiBaseUrl}/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(body => {
            return body;
        })
        .catch(() => {
            return {};
        });
}

export async function fetchSearchedMovies(enteredTitle: string): Promise<Movie[]> {
    const enteredTitleWithoutSpecials = enteredTitle.replace(/[^a-zA-Z ]/g, '');

    return await fetch(
        `${movieApiBaseUrl}/search/movie/?api_key=${process.env.REACT_APP_API_KEY}&query=${enteredTitleWithoutSpecials}`,
    )
        .then(res => res.json())
        .then(body => {
            return body.results;
        })
        .catch(() => {
            return {};
        });
}

export async function fetchMovies(page: string): Promise<Movie[]> {
    return await fetch(`${movieApiBaseUrl}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
        .then(res => res.json())
        .then(res => mapMainMoviesResult(res.results))
        .catch(() => {
            return [];
        });
}

const mapMainMoviesResult = (res: Movie[]): Movie[] => {
    return res.filter(movie => {
        const { id, title, vote_average, overview, poster_path, release_date, runtime, production_countries } = movie;
        if (poster_path) {
            return {
                id: id,
                title: title,
                vote_average: vote_average,
                overview: overview,
                poster_path: poster_path ? `${posterBaseUrl}${poster_path}` : noImage,
                release_date: release_date,
                runtime: runtime,
                production_countries: production_countries,
            };
        }
    });
};

export async function fetchSimilarMovies(movieId: number): Promise<Movie[]> {
    const page = 1;
    return await fetch(
        `${movieApiBaseUrl}/movie/${movieId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`,
    )
        .then(res => res.json())
        .then(res => mapMainMoviesResult(res.results))
        .catch(() => {
            return [];
        });
}
