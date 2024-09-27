import React from 'react';

const Jumbotron = () => {
    //al igual que ya he hecho en el Navbar aqui dentro del return tambien tengo el codigo que quiero renderizar con las diferentes clases y modos de bootstrap que he estraido para los stylos y que sea responsive
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum labore similique, dolor ea sed explicabo. Animi laboriosam impedit aliquid necessitatibus!
        </p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
      </div>
    </div>
  );
}

export default Jumbotron;
