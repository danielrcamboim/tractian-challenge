import { useContext } from "react"
import { AssetsContext } from "../../providers/assets"
import InfoCard from "../../components/assetsCard"

const Home = () => {
    
    const { assets } = useContext(AssetsContext)
    
    return(
        <div className="content-container">
            {assets.map((item) => <InfoCard key={item.id} item={item}/>)}
        </div>
    )
}

export default Home