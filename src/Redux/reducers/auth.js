const initialState = {
    data : [],
    loading : false,
    error : false
}

const Fetch = (state = initialState, action={}) => {
    switch (action.type) {
        case `POST_LOGIN_REQUEST` :
            return {...state, loading: true}
        case `POST_LOGIN_SUCCESS` :
            return {...state, loading: false, data: action.payload}
        case `POST_LOGIN_FAIL` :
            return {...state, loading: false, error: action.payload}
        default :
            return state
    }
}

export default Fetch