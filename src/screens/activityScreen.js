import React from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";
import ExpanseButton from "../components/expanseButton";
import { Feather } from "@expo/vector-icons";

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

ActivityScreen.navigationOptions = {
    tabBarIcon: <Feather name="activity" size={20} />
};

const styles = StyleSheet.create({});

export default ActivityScreen;