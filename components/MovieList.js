import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    Platform,
    StatusBar,
    Button,
    StyleSheet,
    TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

export default function MovieList() {
    const [search, setSearch] = useState("");
    // console.log("This is working");
    const dataArray = [];
    const [data, setData] = useState({});
    const handleSearch = (text) => {
        setSearch(text);
        axios
            .get(`http://www.omdbapi.com/?apikey=3620d507&t=${search}&p=10`)
            .then((res) => {
                if (res.data) {
                    setData(res.data);
                    console.log(dataArray);
                }
                // dataArray.push(data);
                // console.log(dataArray);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    dataArray.push(data);

    const renderItem = ({ item }) => {
        // console.log(item.title);
        console.log("renderItem works");
        return (
            <View style={{ marginVertical: 12 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    {/* Movie Poster */}
                    <Image
                        source={{ uri: item.Poster }}
                        resizeMode="cover"
                        style={{ width: 100, height: 150 }}
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
                            <TouchableOpacity>
                                <MaterialCommunityIcons
                                    color="#64676D"
                                    name="heart"
                                    size={20}
                                    // style={{paddingLeft: 16}}
                                />
                            </TouchableOpacity>
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
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ color: "#64676D" }}>
                                {item.Plot}
                            </Text>
                        </View>
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                    color="white"
                    name="movie-search"
                    size={20}
                    style={{ paddingLeft: 12 }}
                />
                <TextInput
                    placeholder="Search here.."
                    placeholderTextColor="#fff"
                    fontSize={20}
                    style={styles.input}
                    onChangeText={(text) => handleSearch(text)}
                    value={search}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 16 }}>
                <View style={{ flex: 1, marginTop: 8 }}>
                    <FlatList
                        data={dataArray}
                        // keyExtractor={(item) => item.imdbID.toString()}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginRight: 200,
        color: "#fff",
        // borderWidth: 1,
        // borderColor: "white",
        // borderRadius: 10,
        padding: 10,
    },
});
