import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Jilian from './Inter-Usu/Jillian-App/Jilian'
import Jilian2 from './Inter-Usu/Jillian-App/Jilian-2'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderMi from './home/Componentes-Miguel/HeaderMi/MenuMi';
import Miguel from './home/Miguel/Miguel';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Miguel></Miguel>}></Route>
        <Route path='/UsuIn' element={<Jilian></Jilian>}></Route>
        <Route path='/UsuHi' element={<Jilian2></Jilian2>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
