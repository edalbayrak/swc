import React, { useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";

const FriendsScreen = () => {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Header
                onSubmit={() => console.log("token")}
                buttonName="adduser"
                onSubmit2={() => console.log("token")}
                buttonName2="search1"
            />
            <ExpanseButton/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({});

export default FriendsScreen;