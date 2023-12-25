import React from 'react'
import {BrowserRouter as Router, Routes , Route}  from "react-router-dom"
import Login from '../components/Pages/login/Login'
import Signup from '../components/Pages/signup/Signup'

const RootRoute = () => {
  return (
    <Router>

        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>      
        </Routes>

    </Router>
  )
}

export default RootRoute