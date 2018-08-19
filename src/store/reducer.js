import {combineReducers} from 'redux'

import login from './login'
import store from '.'

const reducer = combineReducers({
    login
})

export default reducer