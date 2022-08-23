import React from 'react';

/* HACIENDO QUE EL BOTÓN APAREZCA SOLO CON EL PASS CORRECTO */

const Boton = ({inputPassword}) => {

if (inputPassword !=="252525"){
    return null;
  }  
  return (
    <button class="btn btn-primary" type="submit">Iniciar Sesión</button>
  );


};

export default Boton;