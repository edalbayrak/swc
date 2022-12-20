import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Feather } from "@expo/vector-icons";

const ExpanseScreen = () => {
    return (
        <SafeAreaView>
            <Text>
                Expanse Screen deneme
            </Text>
        </SafeAreaView>
    );
};

ExpanseScreen.navigationOptions = {
    headerStatusBarHeight: 25,
    title: "Add Expanse",
    headerRight: () => (
      <TouchableOpacity style={{ marginRight: 5}}>
        <Feather name="check" size={30} />
      </TouchableOpacity>
    )
};

const styles = StyleSheet.create({});

export default ExpanseScreen;