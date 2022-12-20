import React from "react";
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
import AddFriendScreen from "./src/screens/addFriendScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";

//How to describe navigationOptions in one place???

const mFlow = createBottomTabNavigator({
  Groups: GroupsScreen,
  Friends: FriendsScreen,
  Activity: ActivityScreen,
  Account: AccountScreen,
});

const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow : createStackNavigator({
    Home: HomeScreen,
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createStackNavigator({
    mFlow: mFlow,
    Expanse: ExpanseScreen,
    AddFriend: AddFriendScreen
  })
});

HomeScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
};

mFlow.navigationOptions = { headerShown: false };

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