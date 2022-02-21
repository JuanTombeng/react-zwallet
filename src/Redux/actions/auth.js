import {postRequest} from '../helpers/request'

export const PostLoginRequest = () => {
    return {
        type : `POST_LOGIN_REQUEST`
    }
}

export const PostLoginSuccess = (data) => {
    return {
        type : `POST_LOGIN_SUCCESS`,
        payload : data
    }
}

export const PostLoginFail = (error) => {
    return {
        type : `POST_LOGIN_FAIL`,
        payload : error
    }
}

export const PostLogin = ({email, password}) => {
    return (dispatch) => {
        dispatch(PostLoginRequest())
        return postRequest({email : email, password : password}, `/v2/users/login`, 'POST', null)
            .then((res) => {
                const data = res.data?.data
                console.log(data[0].token)
                const token = data[0].token
                localStorage.setItem('auth', '0')
                localStorage.setItem('token', JSON.stringify(token))
                dispatch(PostLoginSuccess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(PostLoginFail(message))
            })
    }
}