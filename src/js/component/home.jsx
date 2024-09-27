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
                    <div className="col-md-3">
						{/* renderizo el Card creado en la pagina aparte pero aunque no lo haga en las siguientes columnas lo hago dentro de cada columna */}
                        <Card 
                            imagen="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                            titulo="Carta 1"
                            descripcion="descripcion para la primera carta."
                            link="#"
                        />
                    </div>
                    <div className="col-md-3">
                        <Card 
                            imagen="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                            titulo="Carta 2"
                            descripcion="descripcion para la segunda carta."
                            link="#"
                        />
                    </div>
                    <div className="col-md-3">
                        <Card 
                            imagen="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                            titulo="Carta 3"
                            descripcion="descripcion para la tercera carta."
                            link="#"
                        />
                    </div>
					<div className="col-md-3">
                        <Card 
                            imagen="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2018/01/imagen-aleatoria-destacada.png?fit=666%2C370&quality=100&strip=all&ssl=1"
                            titulo="Carta 4"
                            descripcion="descripcion para la cuarta carta."
                            link="#"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
