import {legacy_createStore as createStore, applyMiddleware} from "redux"; 
import { reducer } from "./reducer.js";
import thunk from "redux-thunk"

const loggerMiddleware = (store) => (next) => (action) => {
    console.log("1. action is dispatch", action)
    next(action)
}

const middleware2 = (store) => (next) => (action) => {
    console.log("2. Middleware2 ", action)
    action.payload = 3 
    next(action)
}


// this is thunk function
// const newMiddleware = (store) => (next) => (action) => {
//     console.log("Your are in new middleware")
//     if(typeof action === "function") {
//         return action(store.payload)
//     }
//     next(action)
// }


const middleware = applyMiddleware(loggerMiddleware, middleware2, thunk)

export const store = createStore(
    reducer,
    middleware   
)

store.subscribe(() => {
    console.log( "4. current state",  store.getState())
})
