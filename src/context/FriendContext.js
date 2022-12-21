import createDataContext from "./createDataContext";
import Api from "../api/api";

const friendReducer = ( state, action ) => {
    switch ( action.type) {
        case "fetch_friends":
            return action.payload;
        default:
            return state;
    }
};

const fetchFriends = dispatch => async () => {
    const response = await Api.get("/friends");
    dispatch({ type:"fetch_friends", payload: response.data});
};

const createFriend = dispatch => async ( name, email) => {
    await Api.post("/friends", { name, email});
};

export const { Provider, Context } = createDataContext(
    friendReducer,
    { fetchFriends, createFriend },
    []
);