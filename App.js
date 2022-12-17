import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import HomeScreen from './src/screens/HomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import AccountScreen from "./src/screens/accountScreen";
import ActivityScreen from "./src/screens/activityScreen";
import GroupsScreen from "./src/screens/groupsScreen";
import FriendsScreen from "./src/screens/friendsScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import ExpanseScreen from "./src/screens/expanseScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import {
  MaterialIcons,
  FontAwesome5,
  Feather,
} from "@expo/vector-icons";

//How to describe navigationOptions in one place???

const mFlow = createBottomTabNavigator({
  Groups: {
    screen:GroupsScreen,
    navigationOptions: {
      tabBarIcon: <MaterialIcons name="groups" size={20} />
    },
    initialRouteName: "screen"
  },
  Friends: {
    screen: FriendsScreen,
    navigationOptions: {
      tabBarIcon: <FontAwesome5 name="user-friends" size={20} />
    },
  },
  Activity: {
    screen: ActivityScreen,
    navigationOptions: {
      tabBarIcon: <Feather name="activity" size={20} />
    },
  },
  Account: {
    screen:AccountScreen,
    navigationOptions: {
      tabBarIcon: <MaterialIcons name="account-circle" size={20} />
    },
  },
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow : createStackNavigator({
    Home: HomeScreen,
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        headerTitle: "SWC",
        headerLeft:() => null
      },
    },
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      }
    },
  }),
  mainFlow: createStackNavigator({
    mFlow:{
      screen: mFlow,
      navigationOptions: {
        headerShown: false
      }
    },
    Expanse: {
      screen:ExpanseScreen,
      navigationOptions: {
        headerStatusBarHeight:25,
        title: "Add Expanse",
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 5}}>
            <Feather name="check" size={30} />
          </TouchableOpacity>
        )
      }
    }
  })
});

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
};

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <AuthProvider>
      <App
        ref={(navigator) => { setNavigator(navigator) }}
      />
    </AuthProvider>
  );
};