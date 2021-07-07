import React from "react";
//import { Movie } from "./services/movies.service";

export const MoviesContext = React.createContext(
    [
        {
            title: 'Whiplash',
            rating: 8.5
        },
        {
            title: 'Memento',
            rating: 9.1
        }
    ]
);