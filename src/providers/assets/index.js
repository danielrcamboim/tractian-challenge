import { createContext, useEffect, useState } from "react"
import api from "../../services/api"

export const AssetsContext = createContext([])

export const AssetsProvider = ({ children }) => {
    
    const [assets, setAssets] = useState([])
    
    const getAssetsFromApi = () => {
        api.get("/assets")
        .then((response) => setAssets(response.data))
    }

    useEffect(() => {
        getAssetsFromApi()
    }, [])

    return(
        <AssetsContext.Provider value={{assets, getAssetsFromApi}}>
            {children}
        </AssetsContext.Provider>
    )
}