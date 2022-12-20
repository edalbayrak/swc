import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";

const AccountScreen = () => {
    const { state,signout } = useContext(AuthContext);

    return (
        <View style={{ marginTop:50 }}>
            <Text>
                AccountScreen
            </Text>
            <Button
                title="Signout"
                onPress={ signout }
            />
        </View>
    );
};

AccountScreen.navigationOptions = {
    tabBarIcon: <MaterialIcons name="account-circle" size={20} />
};

const styles = StyleSheet.create({});

export default AccountScreen;