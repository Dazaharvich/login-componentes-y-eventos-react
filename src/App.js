import React, {useState} from 'react';
import Boton from './components/Boton';
import Input from './components/Input';


function App() {
  const [inputName, setInputName] = useState("");
  const [inputPassword, setInputPassword] = useState("");


  return (
    <div className="App">
      <h1>Estado de los componentes y eventos</h1>
      <Input 
        inputName={inputName}
        setInputName={setInputName}
        inputPassword={inputPassword}
        setInputPassword={setInputPassword}
      />
      <Boton 
        inputPassword={inputPassword}
      />
    </div>
  );
}

export default App;
