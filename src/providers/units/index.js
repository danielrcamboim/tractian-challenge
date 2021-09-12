import { createContext, useEffect, useState } from "react"
import api from "../../services/api"

export const UnitsContext = createContext([])

export const UnitsProvider = ({ children }) => {
    
    const [units, setUnits] = useState([])
    
    const getUnitsFromApi = () => {
        api.get("/units")
        .then((response) => setUnits(response.data))
    }

    useEffect(() => {
        getUnitsFromApi()
    }, [])

    return(
        <UnitsContext.Provider value={{units, getUnitsFromApi}}>
            {children}
        </UnitsContext.Provider>
    )
}