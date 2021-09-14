import { useContext } from "react"
import { CompaniesContext } from "../../providers/companies"
import CompaniesCard from "../../components/companiesCard"

const Companies = () => {
    
    const { companies } = useContext(CompaniesContext)
    
    return(
        <div className="content-container">
            { companies.map((item) => <CompaniesCard key={item.id} item={item}/>)}
        </div>
    )
}

export default Companies