import React from "react";
import { useNavigate } from "react-router-dom";

export const AccesoDenegado = () => {
  const navigate = useNavigate();

  const handleVolverHome = () => {
    navigate("/home");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Acceso Denegado</h2>
      <p>No tienes permiso para acceder a esta página.</p>
      <button
        onClick={handleVolverHome}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Volver al Home
      </button>
    </div>
  );
};
