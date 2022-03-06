import React from "react";
import "./Registro.css";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";

const Registro = () => {
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);
  const [login, setLogin] = useState(false);
  //   const { loggedIn } = useAuth();

  return (
    <Formik
      initialValues={{
        nombre: "",
        email: "",
        password: "",
      }}
      validate={(inputs) => {
        let errores = {};
        if (!inputs.nombre) {
          errores.nombre = "Por favor, ingrese un nombre";
        }
        if (!inputs.email) {
          errores.email = "Por favor, ingrese una dirección de email";
        }
        if (!inputs.password) {
          errores.password = "Por favor, ingrese una password";
        }else{
            if(inputs.password.length < 8){
                errores.password = "La password debe tener al menos 8 caracteres";
            }
        }
        if (inputs.password !== inputs.passwordConfirm) {
          errores.passwordConfirm = "Las contraseñas no coinciden";
        }
        return errores;
      }}
      onSubmit={(inputs) => {
        // const email = process.env.REACT_APP_USER_EMAIL;
        // const pass = process.env.REACT_APP_USER_PASS;
        // if (inputs.email === email && inputs.password === pass) {
        //   setSuccess(true);
        //   setLogin(true);
        //   setFail(false);
        //   //   loggedIn();
        // } else {
        //   setFail(true);
        // }
        let userInfo = {
            name: inputs.nombre,
            email: inputs.email,
            password: inputs.password
        }
        console.log(userInfo)
        try {
            fetch("http://localhost:3003/api/user/register", {
              method: "POST",
              redirect: 'follow',
            //   mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            //   credentials: "same-origin", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json",
                "Acces-Control-Allow-Origin": "*"
              },
              body: JSON.stringify(userInfo),      
            })                   
            //   .then((response) => response.json())
              .then((res) => {
                if(res.status === 200){
                  return window.location.replace('/api')
                }
              })        
              .catch((error) => console.log(error));
          } catch (error) {
            console.log(error);
          }
      }}
    >
      {(formikProps) => (
        <Form className="registro">
          <div className="registro__form">
            <h2>CREAR CUENTA</h2>
            <span>Registrate y conocé nuestras ofertas exclusivas</span>
            <label>Nombre</label>
            <Field
              type="text"
              name="nombre"
              placeholder="Ingresa tu nombre"
            ></Field>
            <ErrorMessage
              name="nombre"
              component={() => (
                <div className="emailError">{formikProps.errors.nombre}</div>
              )}
            />
            <label>Email</label>
            <Field
              type="email"
              name="email"
              placeholder="Ingresa tu email"
            ></Field>
            <ErrorMessage
              name="email"
              component={() => (
                <div className="emailError">{formikProps.errors.email}</div>
              )}
            />
            <label>Contraseña</label>
            <Field type="password" name="password"></Field>
            <ErrorMessage
              name="password"
              component={() => (
                <div className="passwordError">
                  {formikProps.errors.password}
                </div>
              )}
            />
            <label>Confirmar contraseña</label>
            <Field type="password" name="passwordConfirm"></Field>
            <ErrorMessage
              name="passwordConfirm"
              component={() => (
                <div className="passwordError">
                  {formikProps.errors.passwordConfirm}
                </div>
              )}
            />
            <div className="registro__form--checkbox1">
              <Field type="checkbox" name="terminos"></Field>
              <label>
                Acepto <a href="#">términos y condiciones</a>
              </label>
            </div>
            <div className="registro__form--checkbox2">
              <Field type="checkbox" name="newsletter"></Field>
              <label>Quiero subscribirme al newsletter</label>
            </div>
            <div className="registro__form--bottom">
              <Link to="/login">CANCELAR</Link>
              <button type="submit">CREAR CUENTA</button>
            </div>
            <span>
              ¿Ya tienes una cuenta? <Link to="/login">Ingresa aquí</Link>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Registro;
