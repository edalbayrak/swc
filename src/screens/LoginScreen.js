import React, { useState,useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const LoginScreen = ({ navigation }) => {
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const { signin } = useContext(AuthContext);

    return (
        <View style={{ marginTop: 50}}>
            <Text style={{ alignItems: "center", fontSize:20}}>Welcome Back</Text>
            <TextInput
                value={ email }
                onChangeText= {setEmail}
                autoCorrect={false}
                placeholder=" Email"
                autoCapitalize="none"
                style={styles.input}
            />
            <TextInput
                value={ password }
                onChangeText= { setPassword }
                autoCorrect={false}
                placeholder=" Password"
                autoCapitalize="none"
                secureTextEntry
                style={styles.input}
            />
            <View style={{ flexDirection:"row", justifyContent:"space-around"}}>
                <Button
                    title="Back"
                    onPress={() => navigation.navigate("Home")}
                />
                <Button
                    title="Done"
                    onPress={() => {
                        signin({email,password})
                    }}
                />
            </View>
        </View>
    );
};

LoginScreen.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    input: {
        marginTop: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
    }
});

export default LoginScreen;