import React, { useContext } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
/*components */
import BtnAdd from "../components/BtnAdd";
import CardProject from "../components/CardProject";
import ProgressBar from "../components/ProgressBar";
/*context*/
import { projectsContex } from "../context/ProjectsProvider.jsx";
const Home = () => {
  const navigate = useNavigate();
  const { projectsData } = useContext(projectsContex);
  return (
    <div className="home">
      <section className="home__proyects">
        {projectsData.length === 0 ? (
          <h3>Sin proyectos...</h3>
        ) : (
          projectsData?.map((project) => (
            <li key={project.id}>
              <ProgressBar project={project} />
              <CardProject project={project} />
            </li>
          ))
        )}
      </section>
      <div onClick={() => navigate("/projects")}>
        <BtnAdd />
      </div>
    </div>
  );
};

export default Home;
