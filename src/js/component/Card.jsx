import React from 'react';

// creo ls funcion para la carta pasandole el argumento de propiedades para hacerla reutilizable con todas las cartas
const Card = (props) => {
    return (
        <div className="card" >
            <img className="card-img-top" src={props.imagen} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href={props.link} className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    );
}

export default Card;
