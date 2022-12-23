import React,{ useContext } from "react";
import { View,Image, Button, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { navigate } from "../navigationRef";

const HomeScreen = () => {
    const { state } = useContext(AuthContext);

    return (
        <View style={ styles.container }>
            <Image
                style={styles.image}
                source={require("../../assets/swc.png")}
            />
            <Spacer/>
            <Text style={styles.text}>SWC</Text>
            <Spacer/>
            < Button
                title="Sign Up"
                onPress={() => navigate("Signup")}
                style={styles.button} 
            />
            <Spacer/>
            < Button
                title="Login"
                onPress={() => navigate("Login")}    
            />
            <Spacer/>
            < Button title="Sign in with Google"
                onPress={() => console.log(state.token)}
            />
        </View>
    );
};

HomeScreen.navigationOptions = () => {
    return {
      headerShown: false
    }
};

const styles = StyleSheet.create({
    container: {
        marginTop: 120,
        alignItems:"center",
        justifyContent:"center"
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10
    },
    text:{
        fontFamily:"",
        fontSize: 30
    },
    button:{
        borderRadius:5,
        backgroundColor: "red"
    }
});

export default HomeScreen;