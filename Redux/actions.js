import axios from "axios";
import { BASE_URL } from "../config/api";

export const getMovies = () => {
    return (dispatch) => {
        const response = {
            method: "GET",
            url: `${BASE_URL}`,
            params: { s: "Avengers Endgame" },
            headers: {
                "x-rapidapi-key":
                    "c9c05a79d0mshf16cdbdabab7ffcp19fb80jsna79fd079df33",
                "x-rapidapi-host":
                    "movie-database-imdb-alternative.p.rapidapi.com",
            },
        };
        axios
            .request(response)
            .then((response) => {
                if (response.data) {
                    dispatch({
                        type: GET_BOOKS,
                        payload: response.data,
                    });
                } else {
                    console.log("Unable to fetch data from the API");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};

export const GET_MOVIES = "GET_MOVIES";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";
