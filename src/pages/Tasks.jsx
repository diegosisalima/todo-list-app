import React, { useContext, useState } from "react";
import "./pages.css";
import { useNavigate, useParams } from "react-router-dom";
import { projectsContex } from "../context/ProjectsProvider";
import axios from "axios";
import getConfig from "../utils/getConfig";
/*components*/
import TaskItem from "../components/TaskItem";
import Input from "../components/Input";
import Load from "../components/Load";
import ProgressBar from "../components/ProgressBar";
import PreviousLink from "../components/PreviousLink";
const Tasks = () => {
  const navigate = useNavigate();
  const { projectsData, isRefresh, setIsefresh } = useContext(projectsContex);
  const { projectId } = useParams();
  const [isLoading, setIsLoading] = useState();
  const currentProyect = projectsData.find(
    (project) => project.id === projectId
  );
  const tasksByProjectId = currentProyect?.tasks;
  const deleteProject = () => {
    setIsLoading(true);
    axios
      .delete(
        `https://todo-list-api-pobk.onrender.com/api/v1/projects/${projectId}`,
        getConfig()
      )
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        setIsefresh(!isRefresh);
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
    <div className="tasks">
      <PreviousLink />
      <section className="tasks__section-project">
        <div>
          <p className="tasks__project-title">{currentProyect?.title}</p>
          <p className="tasks__project-description">
            {currentProyect?.description
              ? currentProyect.description
              : "sin descripción"}
          </p>
        </div>
        <div className="flex-center">
          <i
            className="bx bx-trash tasks__icon tasks__icon-trash cursor"
            onClick={deleteProject}
            title="Eliminar el proyecto y sus tareas"
          ></i>
        </div>
      </section>
      <ProgressBar project={currentProyect} />
      <br />
      <Input />
      <ul className="tasks__ul">
        {tasksByProjectId?.length === 0 ? (
          <h3>Sin tareas...</h3>
        ) : (
          tasksByProjectId?.map((task) => (
            <div key={task.id}>
              <TaskItem task={task} />
            </div>
          ))
        )}
      </ul>
      {isLoading ? <Load /> : null}
    </div>
  );
};

export default Tasks;
