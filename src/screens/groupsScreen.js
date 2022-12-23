import React, { useContext, useState } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";

const GroupsScreen = () => {
    const { state } = useContext(AuthContext);

    return (
        <SafeAreaView style={{ flex:1}}>
            <Header
                routeName={"AddGroup"}
                buttonName="addusergroup"
                onSubmit2={() => console.log(state.token)}
                buttonName2="search1"
            />
            <ExpanseButton/>
        </SafeAreaView>
    );
};

GroupsScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({});

export default GroupsScreen;