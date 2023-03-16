import { useState, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { projectsContex } from "../context/ProjectsProvider";
import Load from "../components/Load";

const FrmLogin = () => {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const { isRefresh, setIsefresh } = useContext(projectsContex);
  const [isLoading, setIsLoading] = useState();

  const submit = (data) => {
    console.log(data);
    setIsLoading(true);
    axios
      .post("https://todo-list-api-pobk.onrender.com/api/v1/auth/login", data)
      .then((result) => {
        console.log(result.data);
        localStorage.setItem("token", result.data.token);
        setIsefresh(!isRefresh);
        setIsLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
    reset({
      email: "",
      password: "",
    });
  };
  return (
    <div className="frm-container-modal">
      <form className="frm-sign-up" onSubmit={handleSubmit(submit)}>
        <header>
          <small>Login</small>
          <h2>Inicia sesión</h2>
        </header>
        <section>
          <label htmlFor="check">Usar credenciales de prueba</label>
          <input
            type="checkbox"
            name="check"
            id="check"
            onClick={(e) => {
              if (e.target.checked) {
                reset({
                  email: "root@hotmail.com",
                  password: "root",
                });
              } else {
                reset({
                  email: "",
                  password: "",
                });
              }
            }}
          />
        </section>
        <section className="frm-sign-up__inputs">
          <input
            className="frm-sign-up__input-item"
            type="email"
            placeholder="Email"
            required
            title="Ingresa tu correo"
            {...register("email")}
          />
          <input
            className="frm-sign-up__input-item"
            type="password"
            placeholder="password"
            required
            title="Ingresa una contraseña"
            {...register("password")}
          />
          <button>Iniciar</button>
        </section>
        <footer>
          <small>
            ¿No tienes una cuenta?
            <Link to="/sign-up" className="frm-sign-up__a">
              Crear una
            </Link>
          </small>
        </footer>
      </form>
      <div
        className="frm-container-modal__btn-close"
        onClick={() => {
          navigate("/");
        }}
      >
        cerrar [x]
      </div>
      {isLoading ? <Load /> : null}
    </div>
  );
};

export default FrmLogin;
