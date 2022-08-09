import { INC_COUNT, DEC_COUNT, GET_ALL_LATEST_TODO_FAILURE, GET_ALL_LATEST_TODO_LOADING, GET_ALL_LATEST_TODO_SUCCESS } from "./actionTypes.js";


export const reducer = (store = {count : 0, todos: [], isloading: false, isError: false}, action) => {
    console.log("3. In reducer", action)
    switch(action.type){

        case INC_COUNT:
            return{
                ...store, count: store.count + action.payload
        }

        case DEC_COUNT:
            return{
                ...store, count: store.count - action.payload
        }

        case GET_ALL_LATEST_TODO_LOADING:
            return{
                ...store,
                isloading: true,
                isError: false,
                todos: []
            }  
        
        case GET_ALL_LATEST_TODO_SUCCESS: 
            return{
                ...store,
                isloading: false, 
                isError: false, 
                todos: [...action.payload]
            }
        
        case GET_ALL_LATEST_TODO_FAILURE:
            return{
                ...store, 
                isloading: false,
                isError: true, 
                todos: []
            }

        default: 
            return store
    }
}

