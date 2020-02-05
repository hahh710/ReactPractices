# React-Redux With Middleware

## what is Middleware?
    iddleware is a plain javascript function that is going be called with everysingle action you dispatch.
    Inside the function, middleware has oppotunity to stop, modify and etc..  

    the rules of Normal Actioncreator
        - Action Creator must return a plain object
        - Action must contain type property
        - Action can optionally contain payload.
    
    After MiddleWare

    the rules with Redux-Thunk 
        - Action creator can return an action object
                        or
        - Action creator can return a function.
        - Action must contain type property
        - Action can optionally contain payload.

## why do we need Middleware?
    In this project, we are using a Middleware for asyn function(Http-Request)

## Eliminating redundunt Request
    There are many ways of handling redundunt request 
    However, In this project, I used the lodash, _.memoize() function
    the function in ._memoize(function) will be copied with some additional code
    and assign into new variable or function 
    ex. const memoizedfunction = _.memoize(function);
    When the memoizedfunction is called with the same argument, called previously,
    the memoized function will just return with saved value.
      