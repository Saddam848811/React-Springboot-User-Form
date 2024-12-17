import { useLocation } from "react-router-dom"



const profile=()=>
{

   const location = useLocation()
   const data = location.state
   console.log(data)

   
    return <div>


        <h1>Hii {data.name}</h1><br /><br />

        <a href="update">click here to update account...</a><br /><br />
<a href="delete">click here to delete account...</a>
    </div>

    
}

export default profile