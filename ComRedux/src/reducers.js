import { combineReducers } from 'redux'
import formReducer from './form/formReducers'

const rootReducers = combineReducers({
    form: formReducer
})

export default rootReducers