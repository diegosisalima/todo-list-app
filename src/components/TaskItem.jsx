import React, { useState, useContext } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";
import { projectsContex } from "../context/ProjectsProvider";
/*components */
import Load from "./Load";

const TaskItem = ({ task }) => {
  const [isLoading, setIsLoading] = useState();
  const { isRefresh, setIsefresh } = useContext(projectsContex);
  const projectId = task.projectId;
  const taskId = task.id;
  const url = `https://todo-list-api-pobk.onrender.com/api/v1/projects/${projectId}/tasks/${taskId}`;
  const updateTask = () => {
    setIsLoading(true);
    axios
      .patch(url, { isComplete: true }, getConfig())
      .then((result) => {
        setIsLoading(false);
        setIsefresh(!isRefresh);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  const deleteTask = () => {
    setIsLoading(true);
    axios
      .delete(url, getConfig())
      .then((result) => {
        setIsLoading(false);
        setIsefresh(!isRefresh);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <li className={`taskitem__li`}>
      <p
        className={`${
          task.isComplete && "taskitem--complete green"
        } flex-center`}
      >
        {task.name}
      </p>
      <div className="taskitem__btns flex-center">
        <div className="flex-center" onClick={updateTask}>
          <i
            className={`bx bx${
              task.isComplete ? "s-check-circle green" : "-circle"
            } cursor`}
            onClick={(e) => task.isComplete && e.stopPropagation()}
          ></i>
        </div>
        <div onClick={deleteTask}>
          <i
            className={`bx bxs-trash cursor ${
              task.isComplete ? "block red" : "none"
            }`}
            title="Eliminar tarea"
          ></i>
        </div>
      </div>
      {isLoading ? <Load /> : null}
    </li>
  );
};

export default TaskItem;
