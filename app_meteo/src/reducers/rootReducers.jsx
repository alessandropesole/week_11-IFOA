import { combineReducers } from "redux";
import stateReducer from "./stateReducer";
import stateCityReducer from "./stateCityReducer";
import searchReducer from "./searchReducer";
import setCityReducer from "./setCityReducer";


const rootReducers = combineReducers({
    nextDays : stateReducer,
    cityData : stateCityReducer,
    search : searchReducer,
    city : setCityReducer
   
})
export default rootReducers;