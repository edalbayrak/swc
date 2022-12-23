import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';

const LoginFLow = createStackNavigator ({
    Home: HomeScreen,
    Signup: SignupScreen,
    Login: LoginScreen
});

export default LoginFLow;