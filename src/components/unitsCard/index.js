import { Card } from 'antd'
import "../common.css"


const UnitsCard = ({item}) => {
    
    const { name, companyId } = item
    
    return(
        <>
            <Card title={`Nome: ${name}`} className="card">
                <p>Compania: {companyId}</p>
            </Card>
        </>
    )
}

export default UnitsCard