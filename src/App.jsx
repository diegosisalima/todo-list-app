import "./App.css";
import "./components/components.css";
import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import getConfig from "./utils/getConfig";
//*components
import FrmSignUp from "./pages/FrmSignUp.jsx";
import FrmLogin from "./pages/FrmLogin";
import Header from "./components/Header";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import CardUser from "./components/CardUser";
import Load from "./components/Load";
import { projectsContex } from "./context/ProjectsProvider.jsx";
import FrmProject from "./components/FrmProject";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Acerca from "./pages/Acerca";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState({});
  const { isRefresh } = useContext(projectsContex);
  useEffect(() => {
    axios
      .get(
        "https://todo-list-api-pobk.onrender.com/api/v1/users/me",
        getConfig()
      )
      .then((result) => {
        setUserData(result.data.data);
        setIsLogin(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isRefresh]);
  const InitialPage = () => {
    return isLoading ? <Load /> : isLogin ? <Home /> : <FrmLogin />;
  };
  return (
    <div className="App">
      <Header userData={userData} />
      <CardUser userData={userData} />
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/login" element={<FrmLogin />} />
        <Route path="/sign-up" element={<FrmSignUp />} />
        <Route path="/acerca" element={<Acerca />} />
        <Route element={<ProtectedRoutes isLogin={isLogin} />}>
          <Route path="/projects" element={<FrmProject />} />
          <Route path="/:projectId/tasks" element={<Tasks />} />
        </Route>
        <Route path="*" element={<InitialPage />} />
      </Routes>
    </div>
  );
}

export default App;
