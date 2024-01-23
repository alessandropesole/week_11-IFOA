import { SET_QUERY } from "../actions/setQuery"

const initialState = {
    query: []
}


const setQueryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY:
            return {
                ...state,
                query: action.payload
            }
        
        default:
            return state
    }
}


export default setQueryReducer;