import React from 'react';
import '../Jilian-Estillos/Estilos.css'; // Asegúrate que exista

function Jilian2() {
  return (
    <div className="jilian2-container">
    
      <header className="header">
        <div className="menu-icon">☰</div>
        <nav className="dropdown-menu">
          <select>
            <option>Perfil-Mascota</option>
            <option>Historial-clínico</option>
            <option>Información-Cita</option>
            <option>Veterinarias</option>
          </select>
        </nav>
        <div className="logo-box">LOGO</div>
        <div className="buttons">
          <button>Button</button>
          <button>Button</button>
        </div>
      </header>

      <main className="main-content">
        <h3>Historial clínico</h3>
        <div className="historia-clinica-box">
          <div className="paciente-info">
            <p><strong>PACIENTE:</strong> XXXXXXXXXXXXX</p>
            <p><strong>FECHA:</strong> XX/XX/XXXX</p>
          </div>

          <div className="reporte">
            <h4>REPORTE:</h4>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>

          <div className="procedimientos">
            <h4>PROCEDIMIENTOS REALIZADOS:</h4>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
            <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Nombre Dueño 1</p>
        <p>Nombre Dueño 2</p>
        <p>XX/XX/XXXX</p>
      </footer>
    </div>
  );
}

export default Jilian2;
