import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(inputs) => {
          let errores = {};
          if (!inputs.email) {
            errores.email = "Por favor, ingrese una dirección de email";
          }
          if (!inputs.password) {
            errores.password = "Por favor, ingrese una password";
          }
          return errores;
        }}
        onSubmit={(inputs) => {
          let userInfo = {
            email: inputs.email,
            password: inputs.password,
          };
          console.log(userInfo);
          try {
            fetch("http://localhost:3003/api/user/login", {
              method: "POST",
              redirect: "follow",
              //   mode: "cors", // no-cors, *cors, same-origin
              cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
              //   credentials: "same-origin", // include, *same-origin, omit
              headers: {
                "Content-Type": "application/json",
                "Acces-Control-Allow-Origin": "*",
              },
              body: JSON.stringify(userInfo),
            })
              //   .then((response) => response.json())
              .then((res) => {
                if (res.status === 200) {
                  console.log("Bienvenido", userInfo.email);
                  setLogin(true);
                }
              })
              .catch((error) => {
                console.log(error);
                console.log("Usuario inexistente");
              });
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {(formikProps) =>
          !login && (
            <Form className="Login">
              <div className="Login__inputs">
                <h2>INICIAR SESIÓN</h2>
                <span>Bienvenido, nos alegra que hayas vuelto!</span>
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
                <span>¿Olvidaste tu contraseña?</span>
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="passwordError">
                      {formikProps.errors.password}
                    </div>
                  )}
                />
                <div className="Login__form--bottom">
                  <Link to="/login">CANCELAR</Link>
                  <button type="submit">INICIAR SESIÓN</button>
                </div>
                <span>
                  ¿No tienes una cuenta?{" "}
                  <Link to="/registro">Ingresa aquí</Link>
                </span>
              </div>
            </Form>
          )
        }
      </Formik>
      {login && (
        <div className="login__success">
          <div className="login__success--inner">
            <h3 className="successfulSend">¡Bienvenido!</h3>
            <Link to="/">
              <button className="ingresar">Ingresar al sitio</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

{
  /* <div className='Login'>
        <div className='Login__inputs'>
            <h2>INICIAR SESIÓN</h2>
            <span>Bienvenido, nos alegra que hayas vuelto!</span>
            <label>Email</label>
            <input type="email" name="email" placeholder='Ingresa tu email'></input>
            <label>Contraseña</label>
            <input type="password" name="password"></input>
            <span>¿Olvidaste tu contraseña?</span>
            <div className='login__form--bottom'>
                <Link to="/">VOLVER</Link>
                <button>INICIAR SESIÓN</button>
            </div>
            <span>¿No tienes una cuenta? <Link to="/registro">Ingresa aquí</Link></span>
        </div>
    </div> */
}
