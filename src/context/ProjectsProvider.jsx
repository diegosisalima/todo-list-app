import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import getConfig from "../utils/getConfig";
export const projectsContex = React.createContext();
// export function useProjectsContext() {
//   return useContext(projectsContex);
// }
const ProjectsProvider = ({ children }) => {
  const [projectsData, setProjectsData] = useState([]);
  const [isAddTask, setIsAddTask] = useState(false);
  const [isAddProject, setIsAddProject] = useState(false);
  const [isRefresh, setIsefresh] = useState(false);
  useEffect(() => {
    axios
      .get(
        "https://todo-list-api-pobk.onrender.com/api/v1/projects",
        getConfig()
      )
      .then((result) => {
        setProjectsData(result.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [isAddTask, isAddProject, isRefresh]);
  const data = {
    projectsData,
    isAddTask,
    isAddProject,
    setIsAddTask,
    setIsAddProject,
    isRefresh,
    setIsefresh,
  };
  return (
    <projectsContex.Provider value={data}>{children}</projectsContex.Provider>
  );
};

export default ProjectsProvider;
