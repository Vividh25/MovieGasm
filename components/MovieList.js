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
import { ListItem } from "react-native-elements";
import { Avatar } from "react-native-elements/dist/avatar/Avatar";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MovieList(props) {
    const movieArray = [];
    const [search, setSearch] = useState("");
    // console.log("This is working");
    const [data, setData] = useState([]);
    const handleSearch = (text) => {
        setSearch(text);
        axios
            .get(`http://www.omdbapi.com/?apikey=3620d507&s=${search}`)
            .then((response) => {
                if (response.data.Search) {
                    setData(response.data.Search);
                    // console.log("Search Data =>", res.data.Search);
                }
                // dataArray.push(data);
                // console.log(dataArray);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const addMovie = async (item) => {
        // console.log("hello");
        console.log(item);
        movieArray.push(item);
        console.log("Heres the array: ", movieArray);
        try {
            await AsyncStorage.setItem(
                `${props.userName}movies`,
                JSON.stringify(movieArray)
            );
        } catch (err) {
            console.log(err);
        }
    };

    const renderItem = ({ item }) => {
        return (
            <ListItem containerStyle={{ backgroundColor: "#1e1B26" }}>
                <Avatar source={{ uri: item.Poster }} size={60} />
                <ListItem.Content>
                    <ListItem.Title style={{ color: "white" }}>
                        {item.Title}
                    </ListItem.Title>
                    <TouchableOpacity
                        onPress={() => {
                            addMovie(item);
                        }}
                    >
                        <ListItem.Chevron
                            size={20}
                            iconProps={{ name: "add" }}
                            style={{ marginLeft: 250 }}
                        />
                    </TouchableOpacity>
                    <ListItem.Subtitle style={{ color: "#64676D" }}>
                        {item.Year}
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
        // console.log(movieArray);
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
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
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
