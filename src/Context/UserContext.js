// import React, { createContext, useEffect, useState } from "react";
// import {useDispatch, useSelector} from 'react-redux'
// import { GetUserDetail } from '../Redux/actions/users'

// export const userContext = createContext(null);
// const UserContext = ({children}) => {
//     const [user, setUser] = useState(null)
//     const dispacth = useDispatch()
//     const {data, loading, error} = useSelector((state) => state.User)

//     useEffect(() => {
//         const token = JSON.parse(localStorage.getItem('token'))
//         if (token) {
//         //     axios({
//         //         baseURL : `${process.env.REACT_APP_URL_BACKEND}`,
//         //         method: 'GET',
//         //         url : `/v2/users/details`,
//         //         headers : {
//         //             'Authorization': `Bearer ${token}`
//         //         }
//         //     })
//         //     .then((res) => {
//         //         const result = res.data.data[0]
//         //         setUser(result)
//         //     })
//         //     .catch((err) => {
//         //         console.log(err.response)
//         //     })
//             dispacth(GetUserDetail())
//             setUser(data[0])
//         }
//     }, [])
//     return (
//         <userContext.Provider value={{ user, setUser }}>
//             {children}
//         </userContext.Provider>
//     )
// }

// export default UserContext
