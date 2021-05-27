import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./components/Navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </Provider>
    );
}
