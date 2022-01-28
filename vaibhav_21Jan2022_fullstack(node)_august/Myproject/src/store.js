import { createStore,applyMiddleware ,compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import {productReducer} from "./reducers/productReducers";

const initialState={};
const composeEnhancer= compose;
const store=createStore(combineReducers({
    products: productReducer,
}),
initialState,
composeEnhancer(applyMiddleware(thunk))
);
export default store;