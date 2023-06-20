import { createStore,applyMiddleware } from "redux";
import productReducer from "../Product/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware()))