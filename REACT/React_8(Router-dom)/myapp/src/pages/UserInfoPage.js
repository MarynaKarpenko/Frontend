import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function UserInfoPage(){

    const {id} = useParams()

    const[user, setUser] = useState({})
    
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users/'+id)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return(
        <div className="content">
            <h1>User Info Page</h1>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.company?.name}</p>
        </div>
    )
}

export default UserInfoPage;