import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { navigate } from "../navigationRef";

const Header = ({ onSubmit, routeName, buttonName, buttonName2 }) => {
    return (
        <View  style={styles.container}>
            <TouchableOpacity onPress={() => navigate(routeName)}>
                <AntDesign name={buttonName} size={28}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={onSubmit}>
                <AntDesign name={buttonName2} size={28}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        marginTop: 40,
        marginHorizontal: 5,
        height: 30,
        flexDirection: "row-reverse",
    }
});

export default Header;