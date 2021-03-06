import useSWR from "swr";
import { MovieDataTypes } from "../Components/Movie/Movie";
import { fetcher } from "./fetcher";

// NOTE: Get Recently added Movies
export const getRecentMovies = () => {
    const { data, error } = useSWR<MovieDataTypes>(
        "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I",
        fetcher
    );
    return data;
};

// NOTE: Get Popular Movies
export const getPopularMovies = () => {
    const { data, error } = useSWR<MovieDataTypes>(
        "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I",
        fetcher
    );
    return data;
};

// NOTE: Get All MoviesAndSeries
export const getAllMoviesAndSeries = () => {
    const { data, error } = useSWR<MovieDataTypes>(
        "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I",
        fetcher
    );
    return data;
};
