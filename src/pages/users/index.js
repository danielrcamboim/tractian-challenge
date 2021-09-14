import { useContext } from "react"
import { UsersContext } from "../../providers/users"
import UsersCard from "../../components/usersCard"

const Users = () => {
    
    const { users } = useContext(UsersContext)
    
    return(
        <div className="content-container">
            { users.map((item) => <UsersCard key={item.id} item={item}/>)}
        </div>
    )
}

export default Users