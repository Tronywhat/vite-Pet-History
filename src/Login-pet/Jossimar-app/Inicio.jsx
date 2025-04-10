import '../Jossimar-estilos/Login.css'
import React, { useState } from 'react';
import Login from '../Componentes-Jossimar/Login';
import { BrowserRouter, Router } from 'react-router-dom';

function Jossimar(){
    return(
        <BrowserRouter>
        <Router>
        <Route path='/login' element={<Login></Login>}></Route>
        </Router>
        </BrowserRouter>
    )
}