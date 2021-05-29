import axios from "axios";
import { BASE_URL } from "../config/api";

export const GET_MOVIES = "GET_MOVIES";
export const ADD_TO_FAV = "ADD_TO_FAV";
export const ADD_TO_WATCHLIST = "ADD_TO_WATCHLIST";
export const REMOVE_FROM_FAV = "REMOVE_FROM_FAV";
export const REMOVE_FROM_WATCHLIST = "REMOVE_FROM_WATCHLIST";

export const getMovies = () => {
    return (dispatch) => {
        const response = {
            method: "GET",
            url: `${BASE_URL}`,
            params: { i: "tt0848228" },
        };
        axios
            .request(response)
            .then((response) => {
                if (response.data) {
                    // console.log(response.data);
                    dispatch({
                        type: GET_MOVIES,
                        payload: response.data,
                    });
                    // console.log("This works too");
                } else {
                    console.log("Unable to fetch data from the API");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
