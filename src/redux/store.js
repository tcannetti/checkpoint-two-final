import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

export default createStore(reducers, state, applyMiddleware(thunk));