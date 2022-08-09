import { INC_COUNT, DEC_COUNT, GET_ALL_LATEST_TODO_FAILURE, GET_ALL_LATEST_TODO_SUCCESS, GET_ALL_LATEST_TODO_LOADING } from "./actionTypes"

export const incCount = (payload) => ({
    type: INC_COUNT,
    payload
})

export const decCount = (payload) => ({
    type: DEC_COUNT, 
    payload
})

export const getAllLatestTodosLoding = () => ({
    type: GET_ALL_LATEST_TODO_LOADING
})

export const getAllLatestTodosSuccess = (payload) => ({
    type: GET_ALL_LATEST_TODO_SUCCESS,
    payload
})

export const getAllTodosFailure = (payload) => ({
    type: GET_ALL_LATEST_TODO_FAILURE
})


// function inside function 

export const getAllTodos = () => async(dispatch) => {
    try {
        dispatch(getAllLatestTodosLoding())
        let res = await fetch("url")
        let data = await res.json()
        dispatch(getAllLatestTodosSuccess(data))
    } catch (error) {
        console.log(error)
        dispatch(getAllTodosFailure())
    }

}


