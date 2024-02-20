import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import url from "../url";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [passwords, setPasswords] = useState("");
  const [email, setEmail] = useState("");
  const [erreur, seterreur] = useState("");
  const [redirect, setRedirect] = useState(false);
  const register = async (e) => {
    e.preventDefault();
    const newPpl = { name, passwords, email };
    try {
      const { data } = await axios.post(`${url}/auth/register`, newPpl);
      setName("");
      setEmail("");
      setPasswords("");
      localStorage.setItem("token", data.token);
      setRedirect(true);
    } catch (error) {
      seterreur(error.response.data.msg);
      setInterval(() => {
        seterreur("");
      }, 5000);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className="Login">
      <div className="Login-content">
        <h2 className="position-absolute start-50">Connexion</h2>
        <form onSubmit={register}>
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="exemple: Rakoto@gmail.com"
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
            deja un compte , connecter vous?
            <Link to={"/Login"} className="versInc">
              cliquez pour vous inscrire
            </Link>
          </p>
          <h6>{erreur}</h6>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
