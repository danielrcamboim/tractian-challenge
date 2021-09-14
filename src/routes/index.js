import { Switch, Route } from "react-router-dom"
import Home from "../pages/home"
import Users from "../pages/users"
import Units from "../pages/units"
import Companies from "../pages/companies"

const Routes = () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/companies">
                <Companies/>
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