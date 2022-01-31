import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const userContext = createContext(null);
const UserContext = ({children}) => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            axios({
                baseURL : `http://localhost:4000/v2`,
                method: 'GET',
                url : `users/details`,
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then((res) => {
                const result = res.data.data[0]
                setUser(result)
            })
            .catch((err) => {
                console.log(err.response)
            })
        }
    }, [])
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default UserContext
