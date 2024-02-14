import Home from './Home';
import Login from './Login';
import Register1 from './Register1';
import Profile from './Profile';

import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register1/>} />
          <Route path="/register" element ={<Register1/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/Profile/:email" element ={<Profile/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
