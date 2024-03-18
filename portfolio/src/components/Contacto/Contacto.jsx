import React, { useState } from "react";
import { Input, Label, Button } from "keep-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { Spinner } from "keep-react";
import { Textarea } from "keep-react";



const Contacto = ({ contactoRef }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  
  });

  const [estadoData, setEstadoData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const enviarData = async () => {
    const docRef = await addDoc(collection(db, "dataFormCollection"), {
      formData,
    });
    console.log("Document written with ID: ", docRef.id);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
    enviarData();
    setEstadoData("Cargando");
    setTimeout(() => {
      setEstadoData("Enviado");
    }, 3000);
  };

  const establecerFormData = () => {
    if (estadoData === "Cargando") {
      return (
        <div className="flex items-center justify-center h-64">
          <Spinner color="success" size="lg" />
        </div>
      );
    }
    if (estadoData === "Enviado") {
      return (
        <div className="text-center h-72 flex justify-center items-center">
          <h2 className="text-4xl text-sky-500">
            Gracias por enviar sus datos, ¡me estare contactando a la brevedad!
          </h2>
        </div>
      );
    } else {
      return (
        <form
          className="flex flex-col items-center w-screen justify-center"
          onSubmit={handleSubmit}
        >
          <Label className="text-xl mb-4 mt-2" htmlFor="name">Ingresar Nombre</Label>
          <Input
            className="w-96 text-center "
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <Label className="text-xl mb-4 mt-2" htmlFor="email">Ingresar E-mail</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="ps-11 w-96 text-center "
            required
          />
          <Label className="text-xl mb-4 mt-2" htmlFor="email">Ingresar Asunto</Label>

          <Input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="Asunto"
            className="ps-11 w-96 text-center "
            required
          />
 <Label className="text-xl mb-4 mt-2 px-4 text-center" htmlFor="email">Ingrese informacion adicional, dudas, ¡o lo que quieras!</Label>

          <Textarea  name="textarea"
            value={formData.textarea}
            onChange={handleChange} className="ps-11 w-96 h-40 text-center"
            required placeholder="Write your message here." />

          <Button
            className="my-10"
            color="primary"
            variant="outline"
            type="submit"
          >
            Enviar Formulario
          </Button>
        </form>
      );
    }
  };

  return (
    <div id="contacto" ref={contactoRef}>
      <h2 className="text-5xl hover:decoration-double hover:underline hover:decoration-error-800 montserrat-title my-10 text-center text-white mt-36 ">CONTACTO</h2>
      <p className="text-center text-white text-3xl px-10 mb-10">
        Estoy abierto frente a cualquier oportunidad laboral tanto de manera
        free-lance como la oportunidad de poder sumarme a un equipo de trabajo y
        ofrecer todo mi empeño y motivacion de cara al futuro. Te invito a que
        completes el siguiente formulario y asi poder entablar contacto a la
        brevedad.
      </p>

      {establecerFormData()}
    </div>
  );
};

export default Contacto;
