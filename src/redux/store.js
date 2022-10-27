import {combineReducers, createStore,applyMiddleware} from 'redux'
import userReducer from './Auth/reducer'
import modeReducer from './Darkmode/reducer'
import {createLogger} from 'redux-thunk'

const rootReducer = combineReducers({userReducer,modeReducer})

const store = createStore(rootReducer)

export default store