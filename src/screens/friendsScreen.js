import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";
import { Context as FriendContext } from "../context/FriendContext";

const FriendsScreen = () => {
    const { state, fetchFriends } = useContext(FriendContext);

    return (
        <>
            <NavigationEvents onWillFocus={ fetchFriends}/>
            <Header
                routeName={"AddFriend"}
                buttonName="adduser"
                onSubmit={fetchFriends}
                buttonName2="search1"
            />
            <ExpanseButton
                data={state}
            />
        </>
    );
};

FriendsScreen.navigationOptions = {
    headerShown: false
};

const styles = StyleSheet.create({});

export default FriendsScreen;