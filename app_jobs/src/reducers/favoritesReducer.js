import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoriteActions"

const initialState = {
    list: []
}


const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITE:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case REMOVE_FAVORITE:
                const updatedList = [...state.list];
                updatedList.splice(action.payload, 1); 
                return {
                    ...state,
                    list: updatedList
            }
        default:
            return state
    }
}


export default favoritesReducer;