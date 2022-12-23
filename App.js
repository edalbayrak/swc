import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import MainFLow from "./src/mainFLow";
import LoginFLow from "./src/loginFlow";
import { setNavigator } from "./src/navigationRef";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as FriendProvider } from "./src/context/FriendContext";

const switchNavigator = createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  LoginFLow,
  MainFLow
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <FriendProvider>
      <AuthProvider>
        <App
          ref={(navigator) => { setNavigator(navigator) }}
        />
      </AuthProvider>
    </FriendProvider>
  );
};