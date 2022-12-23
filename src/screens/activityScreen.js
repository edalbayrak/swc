import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import ExpanseButton from "../components/expanseButton";

const ActivityScreen = () => {
    return (
        <SafeAreaView style={{ flex:1 }}>
            <Text>
                ActivityScreen
            </Text>
            <ExpanseButton/>
        </SafeAreaView>
    );
};

ActivityScreen.navigationOptions = () => {
    return {
        headerStatusBarHeight: 25
    };
};

const styles = StyleSheet.create({});

export default ActivityScreen;