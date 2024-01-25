import { createStore } from "redux";
import rootReducers from "../reducers/rootReducers";

//con la funzione fornita da redux, createStore,  affido alla const store (e quindi allo stato dello store) il rootReducer
const store = createStore(rootReducers);
export default store;