import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const update =()=>
{

 const navigate = useNavigate()

 const [tryagain,setTryagain]=useState(" ")
const [responseMessage,setResponseMessage]=useState("")

const [data,setData]=useState({
name:"",
cpassword:"",
npassword:""

})

const handlechange =(e)=>
{
const{name,value}=e.target
setData({
    ...data,
    [name]:value
})



console.log(data)
}

const handlesubmit=(e)=>{
   
    e.preventDefault(); // Prevent default form submission
    
    axios
      .post("http://localhost:8080/update", data) // Send front variable to the backend
      .then((response) => {
        setResponseMessage(response.data); // Update response message with the backend response
        console.log(response.data);
        if(response.data>0){
            navigate('/update1');
           }else{
                setTryagain("incorrect deatails/try again")
           }
      })

     


     
  }


    return <div>

<h3 style={{color:"red"}}>{tryagain}</h3>
        <h1>i am update</h1>
<form onSubmit={handlesubmit}>

    Enter name: <input type="text" name="name" onChange={handlechange} required pattern=".*\S.*"/><br /><br />
    Enter cuurent password: <input type="text" name="cpassword"  onChange={handlechange} required pattern=".*\S.*"/><br /><br />
    Enter new password: <input type="text" name="npassword" onChange={handlechange} required pattern=".*\S.*"/><br /><br />

    <button type="submit"> update</button>
</form>

    </div>
}
export default update