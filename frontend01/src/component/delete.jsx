import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const deletee=()=>
{ 


 const [tryy,setTryy]=useState("")
    const navigate = useNavigate()
const [responseMessage,setResponseMessage]=useState("")

const [data,setData]=useState({

    name:"",
    password:""
})

const handlechange=(e)=>
{
const {name,value}=e.target
setData({
    ...data,
    [name]:value
})


console.log(data)

}


const handlesubmit=(e)=>{
    e.preventDefault();
    axios
    .post("http://localhost:8080/delete",data)
    .then((response)=>{
        setResponseMessage(response.data)
        console.log(response.data)
        if(response.data>0)
        {
            navigate("/delete1")
        }else{
            setTryy("incorrect details/Try again")
        }
    })

    
}

    return <div>

<h3 style={{color:"red"}}>{tryy}</h3>
<h1>delete page</h1> 
<form onSubmit={handlesubmit}>

    Enter name: <input type="text"name="name" onChange={handlechange} required pattern=".*\S.*" /><br /><br />
    Enter password: <input type="text"name="password" onChange={handlechange} required pattern=".*\S.*" /><br /><br />

 <button type="submit">delete</button>
</form>
    </div>


}
export default deletee
