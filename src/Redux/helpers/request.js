import axios from 'axios'

const token = JSON.parse(localStorage.getItem('token'))

export const getRequest = (url) => {
    return axios({
        baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
        method : 'GET',
        url : url,
        headers : {'Authorization': `Bearer ${token}`}
    })
}

export const postRequest = (data, url, headers) => {
    if (headers === null) {
        return axios({
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            data : data,
            method : 'POST',
            url : url
        })
    } else {
        return axios({
            baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
            data : data,
            method : 'POST',
            url : url,
            headers : {'Authorization': `Bearer ${token}`}
        })
    }
}