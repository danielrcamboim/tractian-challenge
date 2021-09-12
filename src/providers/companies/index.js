import { createContext, useEffect, useState } from "react"
import api from "../../services/api"

export const CompaniesContext = createContext([])

export const CompaniesProvider = ({ children }) => {
    
    const [companies, setCompanies] = useState([])
    
    const getCompaniesFromApi = () => {
        api.get("/companies")
        .then((response) => setCompanies(response.data))
    }

    useEffect(() => {
        getCompaniesFromApi()
    }, [])

    return(
        <CompaniesContext.Provider value={{companies, getCompaniesFromApi}}>
            {children}
        </CompaniesContext.Provider>
    )
}