import createDataContext from "./createDataContext";
import Api from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate } from "../navigationRef";
import { NativeModules } from "react-native";

const authReducer = ( state, action ) => {
    switch (action.type) {
        case "add_error":
            return { ...state, errorMessage: action.payload };
        case "signin":
            return { errorMessage:"", token: action.payload };
        case "clear_error_message":
            return { ...state, errorMessage:"" };
        case "signout":
            return { token: null };    
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
        dispatch({ type: "signin", payload: token });
        navigate("Friends");
    } else {
        navigate("Home");
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: "clear_error_message "})
};

const signup = dispatch => async ({ name, email, password, phone }) => {
    try {
        const response = await Api.post("/signup", { name, email, password, phone });
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        navigate("Friends");
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign up"
        })
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await Api.post("/signin", { email, password});
        await AsyncStorage.setItem("token", response.data.token);
        dispatch({ type: "signin", payload: response.data.token });
        navigate("Friends");
    } catch (err) {
        dispatch({
            type: "add_error",
            payload: "Something went wrong with sign in"
        })
    }
};

const signout = dispatch => async () => {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout" });
    //navigate("Home");
    NativeModules.DevSettings.reload();
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage:""}
);