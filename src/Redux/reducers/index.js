import {combineReducers} from 'redux'

import Auth from './auth'
import {PostProfilePicture, UserDetail} from './users'

const rootReducers = combineReducers({
    Auth,
    PostProfilePicture,
    UserDetail
})

export default rootReducers