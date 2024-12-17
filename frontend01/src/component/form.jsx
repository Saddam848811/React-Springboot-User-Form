import React, { useState } from "react"; // Import useState here
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const form =()=>{

  const navigate = useNavigate(); 

const [responseMessage, setResponseMessage] = useState(""); // To store response from the backend
const front = "hii"; // The value you want to send to the backend

const [user,setUser]=useState({
  name:"",
  rollno:"",
  email:"",
  password: ""
})
console.log(user)

const userhandler = (e) => {
  const { name, value } = e.target; 
  setUser({
    ...user,  // Copy the existing form data
    [name]: value // Update the specific field by its name
  });



}

const handleSubmit = (e) => {

 
     

  e.preventDefault(); // Prevent default form submission
  
  axios
    .post("http://localhost:8080/register", user) // Send front variable to the backend
    .then((response) => {
      setResponseMessage(response.data); // Update response message with the backend response
      console.log(response.data)

    })
    .catch((error) => {
      console.error("Error sending data:", error);
      setResponseMessage("Error sending data"); // Handle error
    });


    navigate('/regdone'); 

   
};    

console.log(responseMessage)
return   <div>
    
    <h1>Registration here...</h1>
    <form onSubmit={handleSubmit}>
    Enter name: <input type="text"name="name" value={user.name} onChange={userhandler} required pattern=".*\S.*" /><br /><br />
    Enter rollno: <input type="text" name="rollno" value={user.rollno} onChange={userhandler}required pattern=".*\S.*"/><br /><br />
    Enter email: <input type="text"name="email" value={user.email} onChange={userhandler}required pattern=".*\S.*"/><br /><br />
    Enter password: <input type="text" name="password" value={user.password} onChange={userhandler}required pattern=".*\S.*"/><br /><br />
        <button type="submit">Send to Backend</button>
      </form>
   
</div>
}

export default form