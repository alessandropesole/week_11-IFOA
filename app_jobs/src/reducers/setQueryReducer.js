import { SET_QUERY } from "../actions/setQuery"

const initialState = { //valore iniziale dello stato è array vuoto
    query: []
}

//così come per il setJobsReducer, il setQueryReducer ritornerà il nuovo payload della action relativa alla query, ossia al value dell'input text inserito dall'utente nella ricerca
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