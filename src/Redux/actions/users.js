import {getRequest, postRequest} from '../helpers/request'

export const GetUserDetailRequest = () => {
    return {
        type : `GET_USER_DETAIL_REQUEST`
    }
}

export const GetUserDetailSucess = (data) => {
    return {
        type : `GET_USER_DETAIL_SUCCESS`,
        payload : data
    }
}

export const GetUserDetailFail = (error) => {
    return {
        type : `GET_USER_DETAIL_FAIL`,
        payload : error
    }
}

export const PostProfilePictureRequest = () => {
    return {
        type : `POST_PROFILE_PICTURE_REQUEST`
    }
}

export const PostProfilePictureSuccess = (data) => {
    return {
        type : `POST_PROFILE_PICTURE_SUCCESS`,
        payload : data
    }
}

export const PostProfilePictureFail = (error) => {
    return {
        type : `POST_PROFILE_PICTURE_FAIL`,
        payload : error
    }
}

export const GetUserDetail = () => {
    return (dispatch) => {
        dispatch(GetUserDetailRequest())
        return getRequest(`/v2/users/details`)
            .then((res) => {
                const data = res.data?.data
                dispatch(GetUserDetailSucess(data))
                dispatch(GetUserDetailSucess(data))
            })
            .catch((err) => {
                const message = err.message
                dispatch(GetUserDetailFail(message))
            })
    }
}

export const PostProfilePicture = (formData) => {
    return (dispatch) => {
        dispatch(PostProfilePictureRequest())
        return postRequest(formData, `/v2/users/profile-picture`)
            .then((res) => {
                const data = res.data?.data
                dispatch(PostProfilePictureSuccess(data))
                dispatch(GetUserDetail())
                window.location.href = '/profile'
                alert(`Your profile picture is updated`)
            })
            .catch((err) => {
                const message = err.message
                dispatch(PostProfilePictureFail(message))
            })
    }
}