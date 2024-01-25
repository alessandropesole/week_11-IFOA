import { SET_CITY } from "../actions/setCity";
const initialState = {
    city : '' //lo stato iniziale di city è dichiarato come stringa vuota
}

const setCityReducer = (state = initialState, action)  => {
    //con lo switch case dichiaro che il reducer ritornerà come stato di search il nuovo payload della action SET_CITY o di default lo stato iniziale.
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