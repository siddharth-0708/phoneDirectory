
import { createStore } from "redux";

const initialState = {
    "subscribers": []
}
//but here provide inital value for state unlike in reducer
function subscribeReducer(state = initialState, action){
    switch (action.type) {
        case "SET_SUBSCRIBERS":
            return {...state, "subscribers" : action.payload};
        default:
            return state;
    }
}

//To make the store global find the root component. Root is index.js
export default createStore(subscribeReducer);