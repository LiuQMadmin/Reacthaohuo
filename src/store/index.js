import reduce from "./reducer"
import {
    createStore,
    applyMiddleware
  } from 'redux'
  import Thunk from 'redux-thunk'
  const reducer=createStore(reduce,applyMiddleware(Thunk))
export default reducer