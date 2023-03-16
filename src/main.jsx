import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HashRouter } from "react-router-dom";
import ProjectsProvider from "./context/ProjectsProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectsProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ProjectsProvider>
  </React.StrictMode>
);
