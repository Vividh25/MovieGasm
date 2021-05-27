import React from "react";
// import { View, Text } from 'react-native'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./Home";
import Profile from "./Profile";
import WatchList from "./WatchList";
import Favourites from "./Favourites";
const Tab = createMaterialBottomTabNavigator();
export default function Navigation() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#fff"
            barStyle={{ backgroundColor: "#133b5c" }}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={{
                    tabBarLabel: "Favourites",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="heart"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="Watchlist"
                component={WatchList}
                options={{
                    tabBarLabel: "WatchList",
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="view-list"
                            color={color}
                            size={26}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
