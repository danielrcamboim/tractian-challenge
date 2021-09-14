import { Card } from 'antd'
import "../common.css"


const CompaniesCard = ({item}) => {
    
    const { id, name } = item
    
    return(
        <>
            <Card title={`Nome: ${name}`} className="card">
                <p>Id: {id}</p>
            </Card>
        </>
    )
}

export default CompaniesCard