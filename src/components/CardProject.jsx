import React from "react";
import { useNavigate } from "react-router-dom";

const CardProject = ({ project }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${project.id}/tasks`);
  };
  return (
    <div className="cardproject" onClick={handleClick}>
      <p className="cardproject__title">{project.title}</p>
      <p className="cardproject__description">
        {project.description ? project.description : "Sin descripción"}
      </p>
      <i className="bx bxs-spreadsheet cardproject__icon"> </i>
    </div>
  );
};

export default CardProject;
