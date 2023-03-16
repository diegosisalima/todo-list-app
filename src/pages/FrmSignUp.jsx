import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
/*components */
import Load from "../components/Load";

const FrmSignUp = () => {
  const [isLoading, setIsLoading] = useState();
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();
  const submit = (data) => {
    setIsLoading(true);
    axios
      .post("https://todo-list-api-pobk.onrender.com/api/v1/users", data)
      .then((result) => {
        console.log(result);
        setIsLoading(false);
        navigate("/login");
      })
      .catch((err) => {
        console.log("🚀 ~ file: FrmSignUp.jsx:23 ~ submit ~ err:", err);
      })
      .finally(() => setIsLoading(false));
    reset({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="frm-container-modal">
      <form className="frm-sign-up" onSubmit={handleSubmit(submit)}>
        <header>
          <small>Sign up</small>
          <h2>Crea una cuenta</h2>
        </header>
        <section className="frm-sign-up__inputs">
          <input
            className="frm-sign-up__input-item"
            type="text"
            placeholder="username"
            required
            title="Ingresa un username"
            {...register("username")}
          />
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
          <button>Crear cuenta</button>
        </section>
        <footer>
          <small>
            ¿Ya tienes una cuenta?
            <Link to="/login" className="frm-sign-up__a">
              Inicia sesión
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
export default FrmSignUp;
