# Middleware 

### createStore

createStore( reducer - mandatory, initialState - optional, middleware - optional )

initialState state - Obj 
middleware - function 

middleware - intercept every action sent to the reducer -> changes to the action or cancel the actions 

use: helps you in logging, error reporting, making async request... 

### How : 

- import 'applymiddleware' from "redux"; 

```
const loggerMiddleware = (store) => (next) => (action) => {
    console.log("Action dispatched", action)
    next(action)
}

// It is similar to nested functions we have written 

const lofferMiddleware = function (store){
    return function(next){
        return function (action) {
            console.log("Action", action)
            next(action)
        }
    }
}

```

#### How to use store subscibe
```
store.subscribe(() => {
    console.log( "current state",  store.getState())
})
```

Steps how things works/called via middleware 
1. Middleware 
2. reducer - action 
3. store get updeted

### To add multiple middleware 
const middleware = applyMiddleware(middleware1, middleware2)

### Create a function that have all the network request then middleware thunk will take care of it

```
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
```



### To add the third middleware in thunk 
1. import compose from redux
2. 
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [thunk]

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);
3. applymiddleware