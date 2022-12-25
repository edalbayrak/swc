import React, { useContext } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as GroupContext } from "../context/GroupContext";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";

const GroupsScreen = () => {
    const { state, fetchGroups } = useContext(GroupContext);

    return (
        <SafeAreaView style={{ flex:1}}>
            <NavigationEvents onWillFocus={fetchGroups}/>
            <Header
                routeName={"AddGroup"}
                buttonName="addusergroup"
                onSubmit2={ () => console.log() }
                buttonName2="search1"
            />
            <ExpanseButton
                data={state}
            />
        </SafeAreaView>
    );
};

GroupsScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({});

export default GroupsScreen;