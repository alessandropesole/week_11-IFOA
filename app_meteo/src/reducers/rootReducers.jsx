import { combineReducers } from "redux";
import stateReducer from "./stateReducer";
import stateCityReducer from "./stateCityReducer";
import searchReducer from "./searchReducer";
import setCityReducer from "./setCityReducer";

// utilizzando la funzione combineReducers fornita da Redux affido alla costante rootReducers un oggetto contenente tutti i Reducers creati che faranno parte dello store
const rootReducers = combineReducers({
    nextDays : stateReducer,
    cityData : stateCityReducer,
    search : searchReducer,
    city : setCityReducer
   
})
export default rootReducers;