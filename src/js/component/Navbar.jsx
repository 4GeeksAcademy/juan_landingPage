import React from 'react';

//defino la funcion navbar ya con todos sus componentes, voy usaer bootstrap y crear un codigo responsive para que se adapte a la pantalla que tengamos
const Navbar = () => {
  return (
    //dentro de este retun y a patir de aqui lo que ya estoy creando es el contenido que quiero que se renderize
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container"> {/* con este container de Bootstrap lo que establezco es una centralizacion, con ancho, margenes, etc del contenido */}
        <p className="navbar-brand" >Start Bootstrap</p>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        > {/* Boton de colapsacion del menu para cuando estemos en pantallas pequenyas lo que hace que sea responsive todo esta estraido de Bootstrap */}
          <span className="navbar-toggler-icon"></span> {/* agrego este span para que aparezca el icono de las 3 barritas horizonateles, tambien estraido todo de bootstrap */}
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"> {/* aqui creo ya los enlaces de Home y companyia y con la clase collapse de nuevo para las pantallas pequenyas y mantener un codigo responsive */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
