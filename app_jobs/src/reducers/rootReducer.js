import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import setJobsReducer from "./setJobsReducer";
import setQueryReducer from "./setQueryReducer";

// utilizzando la funzione combineReducers fornita da Redux affido alla costante rootReducers un oggetto contenente tutti i Reducers creati che faranno parte dello store
const rootReducer = combineReducers({
    favorites: favoritesReducer,
    jobs:setJobsReducer,
    query:setQueryReducer,
})
export default rootReducer