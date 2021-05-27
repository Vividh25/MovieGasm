import React, { useState } from "react";
import { View, Text } from "react-native";

export default function Profile() {
    const [name, setName] = useState();
    return (
        <View>
            <Text style={{ textAlign: "center", marginTop: "50%" }}>
                This is Profile
            </Text>
        </View>
    );
}
