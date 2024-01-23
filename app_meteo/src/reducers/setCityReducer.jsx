import { SET_CITY } from "../actions/setCity";
const initialState = {
    city : ''
}

const setCityReducer = (state = initialState, action)  => {
    switch (action.type) {
        case SET_CITY :
            return{
                ...state,
                search: action.payload,
            };
            default:
                 return state;
    }
}
export default setCityReducer