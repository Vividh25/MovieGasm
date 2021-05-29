import React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar,
    Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../Redux/actions";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MovieList() {
    const data = [];
    const { movies } = useSelector((state) => state.moviesReducer);
    // console.log(movies.Title);
    data.push(movies);
    // console.log(data);

    const dispatch = useDispatch();

    const fetchMovies = () => dispatch(getMovies());

    useEffect(() => {
        // console.log("This works too");
        fetchMovies();
    }, []);

    const renderItem = ({ item }) => {
        // console.log(item.title);
        return (
            <View style={{ marginVertical: 12 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    {/* Movie Poster */}
                    <Image
                        source={{ uri: item.Poster }}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />
                    <View style={{ flex: 1, marginLeft: 12 }}>
                        <View>
                            <Text
                                style={{
                                    fontSize: 22,
                                    paddingRight: 16,
                                    color: "white",
                                }}
                            >
                                {item.Title}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                marginTop: 10,
                                alignItems: "center",
                            }}
                        >
                            <MaterialCommunityIcons
                                color="#64676D"
                                name="movie"
                                size={20}
                            />
                            <MaterialCommunityIcons
                                color="#64676D"
                                name="star"
                                size={20}
                                style={{ paddingLeft: 16 }}
                            />

                            <Text style={{ paddingLeft: 5, color: "#64676D" }}>
                                {item.imdbRating}
                            </Text>
                            <MaterialCommunityIcons
                                color="#64676D"
                                name="eye"
                                size={20}
                                style={{ paddingLeft: 16 }}
                            />
                            <Text style={{ paddingLeft: 5, color: "#64676D" }}>
                                {item.Rated}
                            </Text>
                        </View>
                        {/* <View></View> */}
                    </View>
                </View>
            </View>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#1E1B26",
                paddingTop:
                    Platform.OS === "android" ? StatusBar.currentHeight : 0,
            }}
        >
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <Text style={{ color: "white", fontSize: 22 }}>Movies</Text>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <FlatList
                        data={data}
                        // keyExtractor={(item) => item.imdbID.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                    {/* <Button title="Get Movies" onPress={renderItem} /> */}
                </View>
            </View>
        </View>
    );
}
