import { createStore,applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import main from '../reducers/main'

const prepareMiddleware = (routerMiddleware)=> {
  return applyMiddleware(thunkMiddleware, routerMiddleware, createLogger())(createStore);;
}

export default function configureStore(routerMiddleware){
  var storeWithMiddleware = prepareMiddleware(routerMiddleware)(main);
  return storeWithMiddleware
}
