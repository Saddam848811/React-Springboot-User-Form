import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const login =()=>
{
const [tryy,setTryy]=useState("")
    const navigate  = useNavigate()
const [data,setData]=useState({
    name:"",
    password:""
})
const handleSubmit=(e)=>
{
    e.preventDefault();
   axios
   .get("http://localhost:8080/login",{params:data})
   .then((response)=>{
    const user = response.data
   
    if(response.status === 200 && user)
    {
          console.log("not null")
          navigate("/profile",{state:user})
          
    }else{
       setTryy("incorrect details/Try again")
    }
    
   })
}
const handlechange=(e)=>
{
 const{name,value}=e.target
 setData({
    ...data,
    [name]:value
})
console.log(data)
}

    return <div>

<h3 style={{color:"red"}}>{tryy}</h3>
<h1>login here...</h1>
<form onSubmit={handleSubmit}>

    Enter name: <input type="text" name="name" onChange={handlechange} required /><br /><br />
    Enter password: <input type="text" name="password" onChange={handlechange} required /><br /><br />
<button type="submit">Login</button>
</form>


    </div>
}

export default login