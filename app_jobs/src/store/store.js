import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";

//col metodo di redux configureStore affido alla const store (e quindi allo stato dello store) il rootReducer
const store = configureStore({
    reducer:rootReducer
});


export default store;