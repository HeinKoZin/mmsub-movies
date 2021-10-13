import useSWR from "swr";
import { MovieDataTypes } from "../Components/Movie/Movie";
import { fetcher } from "./fetcher";

// Recently added Movies
export const getRecentMovie = () => {
    const { data, error } = useSWR<MovieDataTypes>(
        "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I",
        fetcher
    );
    return data;
};

// Popular Movies
export const getPopularMovie = () => {
    const { data, error } = useSWR<MovieDataTypes>(
        "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I",
        fetcher
    );
    return data;
};
