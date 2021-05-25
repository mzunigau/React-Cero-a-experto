import React from "react";
// import React, { Fragment } from "react";

const PrimeraApp = ({ saludo = "Hola mundo" }) => {
  //   const saludo = "Hola mundo";
  //   console.log(saludo);

  return (
    <>
      <h1> {saludo} </h1>
      <p>Mi primera aplicación</p>
    </>
  );
};

export default PrimeraApp;
