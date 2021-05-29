import { GET_MOVIES } from "./actions";

const initialState = {
    movies: [],
    favs: [],
    watchlist: [],
};

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            // console.log("get movies working");
            return { ...state, movies: action.payload };
        default:
            return state;
    }
}

export default moviesReducer;
