import React, {  useState } from "react";
import { Input, Label, Button } from "keep-react";


const Contacto = ({ contactoRef }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    // Agrega más campos del formulario aquí según sea necesario
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar formData a tu backend o hacer cualquier otra acción
    console.log(formData);
  };

  return (
    <div id="contacto" ref={contactoRef}>
      <h2 className="text-white text-center text-4xl ">CONTACTO</h2>
      <p className="text-center text-white">
        Estoy abierto frente a cualquier oportunidad laboral tanto de manera
        free-lance como la oportunidad de poder sumarme a un equipo de trabajo y
        ofrecer todo mi empeño y motivacion de cara al futuro. Te invito a que
        completes el siguiente formulario y asi poder entablar contacto a la
        brevedad.
      </p>

      <form className="flex flex-col items-center w-screen justify-center" onSubmit={handleSubmit}>
      <Label htmlFor="name">Enter Name</Label>
      <Input className="w-96 mb-20"  type="text" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} 
        placeholder="Nombre" required />
    <Label htmlFor="email">Enter Email</Label>
    <Input  type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" className="ps-11 w-96" required />
          
          <Button className="my-10" color="primary" variant="outline" type="submit">
        Enviar Formulario
      </Button>
    </form>
    </div>
  );
};

export default Contacto;
