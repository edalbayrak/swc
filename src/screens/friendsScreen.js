import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";
import { navigate } from "../navigationRef";
import { FontAwesome5 } from "@expo/vector-icons";

const FriendsScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                onSubmit={() => navigate("AddFriend")}
                buttonName="adduser"
                onSubmit2={() => console.log("token")}
                buttonName2="search1"
            />
            <ExpanseButton/>
        </SafeAreaView>
    );
};

FriendsScreen.navigationOptions = {
    tabBarIcon: <FontAwesome5 name="user-friends" size={18} />
};

const styles = StyleSheet.create({});

export default FriendsScreen;