import React, { useContext } from "react";
import { StyleSheet, FlatList } from "react-native";
import { ListItem } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import Header from "../components/Header";
import ExpanseButton from "../components/expanseButton";
import { FontAwesome5 } from "@expo/vector-icons";
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
            <FlatList
                data={state}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => {
                    return (
                        <ListItem>
                            <ListItem.Content>
                                <ListItem.Title>
                                    {item.name}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron/>
                        </ListItem>
                    );
                }}
            />
            <ExpanseButton/>
        </>
    );
};

FriendsScreen.navigationOptions = {
    tabBarIcon: <FontAwesome5 name="user-friends" size={18} />
};

const styles = StyleSheet.create({});

export default FriendsScreen;