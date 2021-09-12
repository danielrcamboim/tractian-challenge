import { createContext, useEffect, useState } from "react"
import api from "../../services/api"

export const UsersContext = createContext([])

export const UsersProvider = ({ children }) => {
    
    const [users, setUsers] = useState([])
    
    const getUsersFromApi = () => {
        api.get("/users")
        .then((response) => setUsers(response.data))
    }

    useEffect(() => {
        getUsersFromApi()
    }, [])

    return(
        <UsersContext.Provider value={{users, getUsersFromApi}}>
            {children}
        </UsersContext.Provider>
    )
}