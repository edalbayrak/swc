import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ActivityScreen from "./screens/activityScreen";
import GroupsScreen from "./screens/groupsScreen";
import FriendsScreen from "./screens/friendsScreen";
import AccountScreen from "./screens/accountScreen";
import ExpanseScreen from "./screens/expanseScreen";
import AddFriendScreen from "./screens/addFriendScreen";
import AddGroupScreen from "./screens/addGroupScreen";
import { 
    FontAwesome5,
    Feather,
    MaterialIcons
} from "@expo/vector-icons";

const MainFLow = createBottomTabNavigator({
    Groups: createStackNavigator({
        Groups: GroupsScreen,
        Expanse: ExpanseScreen,
        AddGroup: AddGroupScreen
    },{
        navigationOptions: { tabBarIcon: <MaterialIcons name="groups" size={20} /> }
    }),
    Friends: createStackNavigator({
        Friends: FriendsScreen,
        Expanse: ExpanseScreen,
        AddFriend: AddFriendScreen
    },{
        navigationOptions: { tabBarIcon: <FontAwesome5 name="user-friends" size={18} /> }
    }),
    Activity: createStackNavigator({
        Activity: ActivityScreen,
        Expanse: ExpanseScreen
    }, {
        navigationOptions: { tabBarIcon: <Feather name="activity" size={20} /> }
    }),
    Account: AccountScreen
});

export default MainFLow;