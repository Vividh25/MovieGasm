import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";

export default function WatchList() {
    const [name, setName] = useState(null);
    const [movieList, setMovieList] = useState([]);

    const getUserMovies = async () => {
        try {
            const val = await AsyncStorage.getItem("@storage_name");
            if (val !== null) {
                setName(val);
                console.log("Name: ", name);
            }
        } catch (err) {
            console.log(err);
        }

        try {
            const val = await AsyncStorage.getItem(`${name}movies`);
            if (val.length !== 0) {
                console.log("This", val);
                setMovieList(val);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // useEffect(() => {
    //     try {
    //         AsyncStorage.getItem("@storage_name")
    //             .then((val) => setName(val))
    //             .then(() => {
    //                 console.log(name);
    //                 AsyncStorage.getItem(`${name}movies`).then((userMovies) =>
    //                     setMovieList(userMovies)
    //                 );
    //             });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }, []);
    getUserMovies();

    // console.log(movieList.length);
    // if (movieList.length === 0) {
    //     return (
    //         <View>
    //             <Text>Please add some movies to your movie list</Text>
    //         </View>
    //     );
    // } else {
    //     console.log(movieList);
    //     return (
    //         <View>
    //             <Text>Here is your movie</Text>
    //         </View>
    //     );
    // }
    console.log(JSON.stringify(movieList));
    // movieList = JSON.parse(movieList);
    console.log("Watchlist: ", movieList);
    return (
        <View>
            <Text>{movieList[0].Title}</Text>
        </View>
    );
}
