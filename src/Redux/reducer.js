import { INC_COUNT, DEC_COUNT } from "./actionTypes.js";


export const reducer = (store = {count : 0}, action) => {
    console.log("2. In reducer", action)
    switch(action.type){

        case INC_COUNT:
            return{
                ...store, count: store.count + action.payload
        }

        case DEC_COUNT:
            return{
                ...store, count: store.count - action.payload
        }

        default: 
            return store
    }
}