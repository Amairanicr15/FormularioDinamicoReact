import { useState } from "react";
import './App.css';
import FormInput from "./componentes/FormInput";

const App = () => {
  const [values, setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Nombre de Usuario",
      label: "Usuario",
      required:true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required:true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Fecha de nacimiento",
      label: "Fecha de nacimiento",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Contraseña",
      label: "Contraseña",
      required:true,
    },
    {
      id: 5,
      name: "confirmaPassword",
      type: "text",
      placeholder: "Confirma la contraseña",
      label: "Confirma la contraseña",
      required:true,
    }
  ]
  

  const handleSubmit = (e)=> {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value });
  };


  console.log(values);
  return ( 
  <div className="app">
    <form onSubmit={handleSubmit}>
      <h1>Registro de Usuario</h1>
      {inputs.map((input)=> (
        <FormInput 
        key={input.id}
        {...input} value={values[input.name]}
        onChange={onChange}/>
      ))}
      <button>Registrarse</button>
    </form>
  </div>
  );
};

export default App;
