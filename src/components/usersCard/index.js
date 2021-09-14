import { Card, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import "../common.css"


const UsersCard = ({item}) => {
    
    const { Meta } = Card
    
    const { email, name, unitId, companyId } = item
    
    return(
        <>
            <Card title={`Nome: ${name}`} className="card">
                <Meta
                    avatar={<Avatar size={64} icon={<UserOutlined />} />}
                />
                <div className="description">
                    <p>Email: {email}</p>
                    <p>Unidade: {unitId}</p>
                    <p>Compania: {companyId}</p>
                </div>
            </Card>
        </>
    )
}

export default UsersCard