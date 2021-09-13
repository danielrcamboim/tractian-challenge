import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/companies">
                <h1>Empresas</h1>
            </Route>
            <Route path="/units">
                <h1>Unidades</h1>
            </Route>
            <Route path="/users">
                <h1>Usuários</h1>
            </Route>
        </Switch>
    )
}

export default Routes