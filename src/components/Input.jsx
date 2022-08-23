import React from 'react';

const Input = ({inputName,setInputName,inputPassword,setInputPassword}) => {
  return (
    <form className='d-flex flex-column mb-4'>
      <label className='labels'>Nombre:
        <input 
        className='form-control mt-3' 
        type='text' 
        placeholder='Ingresa tu nombre' 
        onChange={(e)=>{setInputName(e.target.value)}} 
        value={inputName} />
        </label>
        <label className='labels'>Contraseña:
        <input 
        className='form-control mt-3' 
        type='password' 
        maxLength={6}
        placeholder='Ingresa tu password'
        onChange={(e)=>{setInputPassword(e.target.value)}} 
        value={inputPassword} />
        </label>
    </form>
  );
};

export default Input;