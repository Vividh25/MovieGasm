import React from "react";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Platform,
    StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MovieList from "./MovieList";
import { Searchbar } from "react-native-paper";
import { getMovies } from "../Redux/actions";
import axios from "axios";
import { BASE_URL } from "../config/api";

export default function Home() {
    const data = [];
    const [name, setName] = useState(null);
    const [user, setUser] = useState(false);

    const removeItem = async () => {
        try {
            await AsyncStorage.removeItem("@storage_name");
            setUser(false);
            setName(null);
        } catch (err) {
            console.log(err);
        }
    };

    const getData = async () => {
        // console.log("This works");
        try {
            const val = await AsyncStorage.getItem("@storage_name");
            if (val !== null) {
                setName(val);
                setUser(true);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const storeData = async () => {
        try {
            await AsyncStorage.setItem("@storage_name", name);
            getData();
        } catch (err) {
            console.log(err);
        }
    };

    getData();

    if (user === false) {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name!"
                    placeholderTextColor="#fff"
                    onChangeText={(name) => setName(name)}
                    // defaultValue={name}
                />
                <TouchableOpacity style={styles.submitBtn} onPress={storeData}>
                    <Text style={{ fontSize: 18 }}>Submit</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return <MovieList />;
    }
}

const styles = StyleSheet.create({
    container: {
        // alignItems: "center",
        // justifyContent: "center",
        backgroundColor: "#1E1B26",
        flex: 1,
    },
    input: {
        marginRight: 200,
        color: "#fff",
        // borderWidth: 1,
        // borderColor: "white",
        // borderRadius: 10,
        padding: 5,
    },
    submitBtn: {
        marginTop: 20,
        borderRadius: 15,
    },
});
