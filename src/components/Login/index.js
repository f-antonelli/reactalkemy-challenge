import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../context/authContext";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios
         .post("http://challenge-react.alkemy.org/", {
           email: user.email,
           password: user.password,
         })
         .then((res) => {
            login(res);
            navigate('/');
         })
         .catch((err) => {
           console.log(err);
           Swal.fire({
             icon: "error",
             title: "Oops...",
             text: err.message,
           });
         });   
    } catch (error) {
       console.log(`este es el error ${error.message}`)
       setError(error.message);
    }
  };

  return (
    <div className="mw-100 vh-100 d-flex justify-content-center align-items-center bg-success bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="container-fluid bg-white shadow rounded m-5 px-3 py-4"
        style={{ maxWidth: "400px" }}
      >
        <div className="mb-4 d-flex flex-column ">
          <label htmlFor="email" className="fw-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="challenge@alkemy.org"
            className="shadow border rounded py-2 px-3 mt-2"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 d-flex flex-column">
          <label htmlFor="password" className="fw-bold">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="react"
            className="shadow border rounded py-2 px-3 mt-2"
            onChange={handleChange}
          />
        </div>

        <button className="btn btn-success fw-bold">Enviar</button>

        <span>{error && <h1>{error}</h1>}</span>
      </form>
    </div>
  );
};

export default Login;
