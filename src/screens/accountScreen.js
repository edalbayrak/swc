import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

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

const styles = StyleSheet.create({});

export default AccountScreen;