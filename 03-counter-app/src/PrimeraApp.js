import React from "react";
import PropTypes from "prop-types";
// import React, { Fragment } from "react";

const PrimeraApp = ({ saludo, subtitulo }) => {
  //   const saludo = "Hola mundo";
  //   console.log(saludo);

  //   if (!saludo) {
  //     throw new Error("El saludo es necesario");
  //   }

  return (
    <>
      <h1> {saludo} </h1>
      <p>{subtitulo}</p>
    </>
  );
};

PrimeraApp.protoTypes = {
  saludo: PropTypes.string.isRequired,
};

PrimeraApp.defaultProps = {
  subtitulo: "Soy un subtitulo nuevo",
};

export default PrimeraApp;
