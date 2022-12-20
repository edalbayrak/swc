import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddGroupScreen = () => {
    return (
        <View>
            <Text>
                Add Group Screen
            </Text>
        </View>
    );
};

AddGroupScreen.navigationOptions = {
    headerStatusBarHeight:25,
    title:"Add Group",
    headerRight: () => (
        <TouchableOpacity style={{ marginRight: 5}}>
          <Feather name="check" size={30} />
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({});

export default AddGroupScreen;