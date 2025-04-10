import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useState } from 'react';
import Login from "../Componentes-Jossimar/Login.jsx"
import './Login.css'

function Jossimar () {
return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </BrowserRouter>
    </>
)
}
export default Jossimar