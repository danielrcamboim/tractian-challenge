import { useContext } from "react"
import { UnitsContext } from "../../providers/units"
import UnitsCard from "../../components/unitsCard"

const Units = () => {
    
    const { units } = useContext(UnitsContext)
    
    return(
        <div className="content-container">
            { units.map((item) => <UnitsCard key={item.id} item={item}/>)}
        </div>
    )
}

export default Units