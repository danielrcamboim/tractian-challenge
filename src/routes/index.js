import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Users from "../pages/users"
import Units from "../pages/units"

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
                <Units/>
            </Route>
            <Route path="/users">
                <Users/>
            </Route>
        </Switch>
    )
}

export default Routes