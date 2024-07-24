import { useContext } from "react";
import { UserContext } from "../../context/usercontext";




export default function Dashboard(){
    const{user} = useContext(UserContext)
    return(
        <div>Dashboard
            {!!user && (<h1>HI {user.name}!</h1>)}
        </div>
    )
}