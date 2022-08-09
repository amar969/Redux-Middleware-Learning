import {legacy_createStore as createStore, applyMiddleware} from "redux"; 
import { reducer } from "./reducer.js";

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("1. action is dispatch", action)
    next(action)
}

const middleware = applyMiddleware(loggerMiddleware)

export const store = createStore(
    reducer,
    middleware   
)

store.subscribe(() => {
    console.log( "current state",  store.getState())
})
