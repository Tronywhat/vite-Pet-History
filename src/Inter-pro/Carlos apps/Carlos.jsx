import '../Estilos carlos/cebolla.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menuu from '../Componentescarlos/Menuu';
import Peboton from '../Componentescarlos/Peboton';
import Ceboton from "../Componentescarlos/Ceboton"
import Cuerpoo from "../Componentescarlos/Cuerpoo"


function Carlos() {

  return (
    <>
      <div className='Edimenu'>

        <Menuu></Menuu>
        <Peboton></Peboton>
        <Ceboton></Ceboton>
      </div>
      
      <Cuerpoo></Cuerpoo>
        
    </>
  )
}

export default Carlos
