import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Franja from "./Franja.js";
import img1 from "../imagenes/img1.png";
import img2 from "../imagenes/img2.png";
import crear from "../imagenes/crear.png";
import carruselimg1 from "../imagenes/carruselimg1.png";
import carruselimg2 from "../imagenes/carruselimg2.png";
import carruselimg3 from "../imagenes/carruselimg3.png";
import Cookies from "js-cookie";
import fondo from '../imagenes/unamed.jpg';

export const Home = () => {
  const dialogStyleErr = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    backgroundColor: "red",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
  };
  const [deshabilitarBotonCasoC, setDisabledButton] = useState("/casos-cerrados");
  const [deshabilitarBotonCasoA, setDisabledButtonCasoA] =
    useState("/casos-activos");
  const [deshabilitarBotonCrearCaso, setDisabledButtonCrearCaso] =
    useState("/crear-caso");
  const [showDialogErr, d] = useState(false);
  const responsableID = Cookies.get("userId");

  useEffect(() => {
    if (parseInt(responsableID) === 2) {
      setDisabledButtonCrearCaso("#");
    } else if (parseInt(responsableID) === 3) {
      setDisabledButtonCrearCaso("#");
      setDisabledButtonCasoA("#");
    }
  }, []);

  const alerta = () => {
    console.log("ALERTA");
    if (deshabilitarBotonCrearCaso === "#" && parseInt(responsableID) === 2) {
      console.log("2");
      d(true); // Muestra el diálogo
      setTimeout(() => {
        d(false); // Desaparece después de 2 segundos
      }, 2000);
    } else if (
      deshabilitarBotonCasoA === "#" &&
      deshabilitarBotonCrearCaso === "#" &&
      parseInt(responsableID) === 3
    ) {
      console.log("3");
      d(true); // Muestra el diálogo
      setTimeout(() => {
        d(false); // Desaparece después de 2 segundos
      }, 2000);
    }
  };

  return (

    <div className="container-fluid d-flex flex-column">
      <Franja onLogout={() => console.log("Logout clicked")} />

        
     {/* Carrusel */}
     <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{ backgroundImage: `url(${fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '10px 0  ' }} 
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="d-block p-0 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
              <h4>Gestión de Casos Forenses</h4>
              <p>
                Desde aquí puedes gestionar y acceder a la información forense
                de manera segura y confiable, utilizando la tecnología
                Blockchain para asegurar la integridad y trazabilidad de los
                datos.
              </p>
              <img
                src={carruselimg3}
                className="imagenesCarrusel"
                style={{ height: "80px" }}
               alt="Gestión de Casos Forenses" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block p-0 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
              <h4>Seguridad de Datos</h4>
              <p>
                Implementamos tecnologías avanzadas para garantizar la seguridad
                y privacidad de los datos forenses. Nuestra solución está
                diseñada para proteger la integridad de la información en todo
                momento.
              </p>
              <img
                src={carruselimg2}
                className="imagenesCarrusel"
                style={{ height: "80px" }}
               alt="Seguridad de Datos" />
            </div>
          </div>
          <div className="carousel-item">
            <div className="d-block p-0 text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
              <h4>Acceso Simplificado</h4>
              <p>
                Accede a la información forense de manera intuitiva y fácil.
                Nuestra interfaz permite una navegación sencilla, permitiendo a
                los usuarios encontrar la información que necesitan sin
                complicaciones.
              </p>
              <img
                src={carruselimg1}
                className="imagenesCarrusel"
                style={{ height: "80px" }}
               alt="Acceso Simplificado" />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
      <hr />
      
      {/* Módulos principales */}
      <div className="modules-container">
        <div className="module">
          <img
            src={img1}
            alt="Gestión de Casos Activos"
            className="module-image"
          />
          <h4 className="module-title">Gestión de Casos Activos</h4>
          <p className="module-text">
            En este módulo, puedes gestionar todos los casos forenses que están
            actualmente en curso. Revisa el estado de cada caso, actualiza la
            información y da seguimiento en tiempo real, asegurando la
            integridad de los datos a través de la tecnología blockchain.
          </p>
          <Link to={deshabilitarBotonCasoA} onClick={alerta}>
            <button className="btn btn-primary module-btn">Ingresar</button>
          </Link>
        </div>
        <div className="module">
          <img
            src={img2}
            alt="Consulta de Casos Cerrados"
            className="module-image"
          />
          <h4 className="module-title">Consulta de Casos Cerrados</h4>
          <p className="module-text">
            Accede a los casos archivados o finalizados. Aquí podrás consultar
            el historial completo de cada caso, verificando toda la
            documentación y detalles que fueron gestionados durante el proceso,
            con la seguridad de que la información está protegida y es
            inmutable.
          </p>
          <Link to={deshabilitarBotonCasoC}>
            <button className="btn btn-primary module-btn">Ingresar</button>
          </Link>
        </div>
      </div>

      <br/><br/> 
      <div className="footer-margin"></div>
    </div>
  );
};

export default Home;
