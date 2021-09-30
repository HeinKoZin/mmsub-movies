import React, { useEffect } from "react";
import { createTheme, styled } from "@mui/material/styles";
import Movie, { ResultsTypes } from "../Movie/Movie";
import axios from "axios";
import MovieCarousel from "../MovieCarousel/MovieCarousel";

const theme = createTheme();

interface PropsTypes {}
interface StateTypes {
    movieData: MovieData;
}

type MovieData = {
    page: number;
    results: ResultsTypes[];
};

// type ResultsTypes = {
//     adult: boolean;
//     backdrop_path: string;
//     genre_ids: number[];
//     id: number;
//     original_language: string;
//     original_title: string;
//     overview: string;
//     popularity: number;
//     poster_path: string;
//     release_date: string;
//     title: string;
//     video: boolean;
//     vote_average: number;
//     vote_count: number;
// };

const MovieContainer = styled("div")<{ recommend?: boolean }>(
    ({ theme, recommend }) => ({
        width: "100vw",
        height: recommend ? "500px" : "100vh",
        backgroundImage:
            "url('https://spacequotations.com/wp-content/uploads/2019/01/interstellar.jpg')",
        backgroundPosition: "contain",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })
);

// class TodayMovie extends React.Component<PropsTypes, StateTypes> {
//     constructor(props: PropsTypes) {
//         super(props);

//         this.state = { movieData: { page: 1, results: [] } };
//     }

//     fetchData = () => {
//         axios
//             .get<MovieData>(
//                 "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I"
//             )
//             .then((res) => {
//                 this.setState({
//                     movieData: res.data,
//                 });
//                 console.log(this.state);
//             });
//     };

//     componentDidMount() {
//         this.fetchData();
//     }

//     render() {
//         const imagePath = "https://image.tmdb.org/t/p/original";
//         return (
//             <>
//                 {this.state.movieData !== undefined
//                     ? this.state.movieData.results.map((result) => (
//                           <img
//                               src={imagePath + result.poster_path}
//                               width="150px"
//                           />
//                       ))
//                     : ""}
//             </>
//         );
//     }
// }

const TodayMovie = () => {
    const [data, setMovieData] = React.useState<StateTypes>();

    const fetchData = () => {
        axios
            .get<MovieData>(
                "https://api.themoviedb.org/3/search/movie?api_key=c6e84f9b84872a49a4f26020835b8700&query=Who&am&I"
            )
            .then((res) => {
                setMovieData({
                    movieData: res.data,
                });
            });
    };

    useEffect(() => {
        setTimeout(() => {
            fetchData();
        }, 1000);
    }, []);

    return (
        <MovieCarousel>
            {data?.movieData.results.map((movie) => (
                <Movie movieData={movie} key={movie.id} />
            ))}
        </MovieCarousel>
    );
};

export default TodayMovie;
