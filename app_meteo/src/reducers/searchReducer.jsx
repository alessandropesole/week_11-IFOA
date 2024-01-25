import { SET_SEARCH } from "../actions/setSearch";

const initialState = {
    search : '' //lo stato iniziale di search è dichiarato come stringa vuota
} 

const searchReducer = (state = initialState, action) => {
    //con lo switch case dichiaro che il reducer ritornerà come stato di search il nuovo payload della action SET_SEARCH o di default lo stato iniziale.
    switch (action.type) {
        case SET_SEARCH:
            
            return{
                ...state,
                search: action.payload,
            };
            default:
                 return state;
    }
}
export default searchReducer