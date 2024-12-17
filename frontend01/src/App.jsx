import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './component/form'
import Regdone from './component/regdone'
import Update from './component/update'
import Update1 from './component/update1'
import Delete from './component/delete'
import Delete1 from './component/delete1'
import Profile from './component/profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './component/login'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
       <h1> i am form</h1>
      </div>
      <div><Form /></div>
      */}
       <Router>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/regdone" element={<Regdone />} />
        <Route path="/login" element={<Login />} />
        <Route path="/update" element={<Update />} />
        <Route path="/update1" element={<Update1 />} />
        <Route path="/delete" element={<Delete />} />
        <Route path="/delete1" element={<Delete1 />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </Router>
    </>
  )
}

export default App
