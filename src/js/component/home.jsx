import React from 'react';
import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Card from './Card';

const Home = () => {
    return (
        <div>
            <Navbar /> {/* renderizo el Navbar creado en la pagina aparte */}
            <div className="container mt-5">
                <Jumbotron /> {/* renderizo el Jumbotron creado en la pagina aparte */}
                <div className="row mt-5">
                    <div className="col-md-4">
						{/* renderizo el Card creado en la pagina aparte pero aunque no lo haga en las siguientes columnas lo hago dentro de cada columna */}
                        <Card 
                            imagen=""
                            titulo="Carta 1"
                            descripcion="descripcion para la primera carta."
                            link="#"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            imagen=""
                            titulo="Carta 2"
                            descripcion="descripcion para la segunda carta."
                            link="#"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card 
                            imagen=""
                            titulo="Carta 3"
                            descripcion="descripcion para la tercera carta."
                            link="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
