import { Menu } from "antd"
import { Link } from "react-router-dom"
import Logo from "../../assets/Logo-Tractian.svg"

const CustomHeader = () => {
    return(
        <>
        <div className="logo">
            <img src={Logo} alt="Tractian Logo"/>
        </div>
        <Menu className="menu" mode="horizontal">
            <Menu.Item key="assets">
                <Link to="/">Ativos</Link>
            </Menu.Item>
            <Menu.Item key="companies">
                <Link to="/companies">Empresas</Link>
            </Menu.Item>
            <Menu.Item key="units">
                <Link to="/units">Unidades</Link>
            </Menu.Item>
            <Menu.Item key="users">
                <Link to="/users">Usuários</Link>
            </Menu.Item>
        </Menu>
        </>
    )
}

export default CustomHeader