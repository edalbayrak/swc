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

ExpanseScreen.navigationOptions = () => {
    return {
        headerRight: () => (
            <TouchableOpacity>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
        )
    };
};

const styles = StyleSheet.create({});

export default ExpanseScreen;