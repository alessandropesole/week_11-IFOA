import { combineReducers } from "redux";
import favoritesReducer from "./favoritesReducer";
import setJobsReducer from "./setJobsReducer";
import setQueryReducer from "./setQueryReducer";



const rootReducer = combineReducers({
    favorites: favoritesReducer,
    jobs:setJobsReducer,
    query:setQueryReducer,
})
export default rootReducer