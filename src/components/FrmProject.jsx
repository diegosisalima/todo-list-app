import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { projectsContex } from "../context/ProjectsProvider";
import getConfig from "../utils/getConfig";
/*componentes */
import Load from "./Load";

const FrmProject = () => {
  const navigate = useNavigate();
  const { isAddProject, setIsAddProject } = useContext(projectsContex);
  const [isLoading, setIsLoading] = useState();

  const url = "https://todo-list-api-pobk.onrender.com/api/v1/projects";

  const handleClick = () => {
    navigate("/");
  };

  const submit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const title = e.target.projectTitle.value;
    const description = e.target.projectDescription.value;
    e.target.projectTitle.value = "";
    e.target.projectDescription.value = "";
    axios
      .post(url, { title, description }, getConfig())
      .then((result) => {
        console.log(result.data);
        setIsAddProject(!isAddProject);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="frmproject__container modal">
      <div className="frmproject__content"></div>
      <form onSubmit={submit} className="frmproject">
        <p className="frmproject__title">Nuevo proyecto</p>
        <input
          type="text"
          className="frmproject__input input"
          placeholder="Ingrese un título *"
          required
          id="projectTitle"
        />
        <input
          id="projectDescription"
          type="text"
          className="frmproject__input input"
          placeholder="Ingrese una descripción"
        />
        <section className="frmproject__btns flex-center">
          <button className="frmproject__btn input__btn">✅Añadir</button>
          <button className="frmproject__btn input__btn" onClick={handleClick}>
            ❌cancelar
          </button>
        </section>
      </form>
      <div className="frm-container-modal__btn-close" onClick={handleClick}>
        cerrar [x]
      </div>
      {isLoading ? <Load /> : null}
    </div>
  );
};

export default FrmProject;
