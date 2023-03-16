import React from "react";
import { useNavigate } from "react-router-dom";

const Acerca = () => {
  const navigate = useNavigate();
  return (
    <div className=" modal">
      <div className="acerca">
        <i className="bx bxs-spreadsheet acerca__icon"> </i>
        <small className="acerca__title">Todo list app</small>
        <small className="acerca__created">creado por: </small>
        <a
          href="https://diegosisalima.netlify.app/"
          target={"_blank"}
          className="acerca__name"
        >
          Diego Sisalima{" "}
        </a>
        <hr />
      </div>
      <div
        className="frm-container-modal__btn-close"
        onClick={() => {
          navigate("/");
        }}
      >
        cerrar [x]
      </div>
    </div>
  );
};

export default Acerca;
