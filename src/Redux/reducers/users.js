const initialState = {
    data : [],
    loading : false,
    error : false
}

export const UserDetail = (state = initialState, action={}) => {
    switch (action.type) {
        case `GET_USER_DETAIL_REQUEST` :
            return {...state, loading: true}
        case `GET_USER_DETAIL_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `GET_USER_DETAIL_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export const PostProfilePicture = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_PROFILE_PICTURE_REQUEST` :
            return {...state, loading: true}
        case `POST_PROFILE_PICTURE_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_PROFILE_PICTURE_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

// export default Fetch