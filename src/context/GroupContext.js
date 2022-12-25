import createDataContext from "./createDataContext";
import Api from "../api/api";

const groupReducer = ( state, action ) => {
    switch ( action.type) {
        case "fetch_groups":
            return action.payload;
        default:
            return state;
    }
};

const fetchGroups = dispatch => async () => {
    const response = await Api.get("/groups");
    dispatch({ type:"fetch_groups", payload: response.data});
};

const createFriend = dispatch => async ( name ) => {
    await Api.post("/groups", { name });
};

export const { Provider, Context } = createDataContext(
    groupReducer,
    { fetchGroups, createFriend },
    []
);