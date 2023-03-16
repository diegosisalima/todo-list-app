import React, { useContext, useState } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";
import { useParams } from "react-router-dom";
import { projectsContex } from "../context/ProjectsProvider";
import Load from "./Load";
const Input = () => {
  const [isLoading, setIsLoading] = useState();
  const { isAddTask, setIsAddTask } = useContext(projectsContex);
  const { projectId } = useParams();
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    const name = e.target.task.value;
    e.target.task.value = "";
    axios
      .post(
        `https://todo-list-api-pobk.onrender.com/api/v1/projects/${projectId}/tasks`,
        { name },
        getConfig()
      )
      .then((result) => {
        console.log(result);
        setIsAddTask(!isAddTask);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <form className="input__frm flex-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Agregar nueva tarea..."
        id="task"
      />
      <button className="input__btn">añadir ✔</button>
      {isLoading ? <Load /> : null}
    </form>
  );
};

export default Input;
