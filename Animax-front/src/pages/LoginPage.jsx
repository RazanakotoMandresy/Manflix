import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import url from "../url";
const LoginPage = () => {
  const [passwords, setPasswords] = useState("");
  const [email, setEmail] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [erreur, seterreur] = useState("");
  const Login = async (e) => {
    e.preventDefault();
    const values = { email, passwords };
    try {
      const { data } = await axios.post(`${url}/auth/login`, values);
      setEmail("");
      setPasswords("");
      localStorage.setItem("token", data.token);
      setRedirect(true);
      seterreur("");
    } catch (error) {
      seterreur(error.response.data.msg);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className=" Login">
      <div className="Login-content">
        <h2 className="position-absolute start-50">Connexion</h2>
        <form onSubmit={Login}>
          <input
            type="email"
            name="email"
            placeholder="exemple:Rakoto@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="passwords"
            placeholder="mots de passes ici"
            value={passwords}
            onChange={(e) => setPasswords(e.target.value)}
          />
          <button> se connecter </button>
          <p>
            pas encore de comptes?
            <Link to={"/register"} className="versInc">
              cliquez pour vous inscrire
            </Link>
          </p>
        </form>
        {erreur}
      </div>
    </div>
  );
};

export default LoginPage;
