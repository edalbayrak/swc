import React, { useState, useContext } from "react";
import {
    View,
    TextInput,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet, 
    Button}
from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ phone, setPhone ] = useState("");
    const { signup } = useContext(AuthContext);

    return (
        <View>
            <TextInput
                value={ name }
                onChangeText={ setName }
                autoCorrect={false}
                placeholder=" Full Name"
                autoCapitalize="words"
                clearButtonMode="always"
                style={styles.input}
            />
            <View style={{ flexDirection:"row"}}>
                <Image
                    source={require("../../assets/favicon.png")}
                    style={styles.image}
                />
                <View style={{ flexDirection:"column", flex: 1}}>
                    <TextInput
                        value={ email }
                        onChangeText={ setEmail }
                        autoCorrect={false}
                        placeholder=" Email"
                        autoCapitalize="words"
                        style={styles.input2}
                    />
                    <TextInput
                        value={ password }
                        onChangeText={ setPassword }
                        autoCorrect={false}
                        placeholder=" Password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                        style={styles.input2}
                    />
                </View>
            </View>
            <TextInput
                value={ phone}
                onChangeText= { setPhone }
                autoCorrect={false}
                placeholder=" Phone (optional)"
                autoCapitalize="none"
                keyboardType="numeric"
                style={styles.input2}
            />
            <View style={{ flexDirection:"row", justifyContent:"center", marginVertical: 5}}>
                <Text style={{ marginLeft: 5}}>I use SELECTEDCURRENCY as my currency.</Text>
                <TouchableOpacity>
                    <Text style={{ color:"blue"}}>Change</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection:"row", justifyContent: "space-around", marginVertical: 5}}>
                <Button
                    title="Back"
                    onPress={() => navigation.navigate("Home")}
                />
                <Button
                    title="Done"
                    onPress={signup({ name, email, password, phone })}
                />
            </View>
        </View>
    );
};

SignupScreen.navigationOptions = {
    headerStatusBarHeight: 25,
    headerTitle: () => {
        return (
            <View style={{ flexDirection:"row", alignItems:"center"}}>
                <Image
                    source={require("../../assets/favicon.png")}
                    style={{ width:35, height:35}}
                />
                <Text>
                    SWC
                </Text>
            </View>
        );
    },
    headerLeft:() => null
};

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
    },
    input2: {
        marginHorizontal: 5,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5
    },
    image: {
        marginLeft: 5,
        marginTop: 5,
        width: 100,
        height: 100
    }
});

export default SignupScreen;