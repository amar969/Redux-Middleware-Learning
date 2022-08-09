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

