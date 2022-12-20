import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddFriendScreen = () => {
    return (
        <View>
            <Text>
                Add Friend Screen
            </Text>
        </View>
    );
};

AddFriendScreen.navigationOptions = {
    headerStatusBarHeight:25,
    title:"Add Friend",
    headerRight: () => (
        <TouchableOpacity style={{ marginRight: 5}}>
          <Feather name="check" size={30} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({});

export default AddFriendScreen;