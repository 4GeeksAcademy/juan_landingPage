import PropTypes from 'prop-types';
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

//importo los PropTypes que es lo unico que no he realizado antes y que le anyadire a este codigo, luego lo editare en home.jsx
Card.propTypes = {
    imagen : PropTypes.string,
    titulo : PropTypes.string,
    descripcion : PropTypes.string,
    link : PropTypes.string
};

export default Card;
