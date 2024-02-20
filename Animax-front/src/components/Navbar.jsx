import React from "react";
import {
  FiHome,
  FiList,
  FiLogIn,
  FiLogOut, 
  FiPlusCircle,
  FiSettings,
} from "react-icons/fi";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="Navbar fixed-top ">
      <ul className="container">
        <li>
          <Link to={"/"}>
            <FiHome className="icons" />
          </Link>
        </li>
        <li>
          <Link to={"/List"}>
            <FiList className="icons" />
          </Link>
        </li>
        <li className="droite">
          <Link to={"/"}><FiLogOut className=" icons" /></Link>
          <Link to={"/Login"}><FiLogIn className="icons" /></Link>
        </li>

        <li className="droite">
          <FiSettings className="icons" />
        </li>
        <li className="droite">
          <Link to={"/Post"}>
            <FiPlusCircle className="icons" />
          </Link>
        </li>
      </ul>
      <input
        type="search"
        name=""
        id=""
        className="position-absolute top-1 start-50 translate-middle-x"
        placeholder="entrer vos recherche ici"
      />
    </nav>
  );
};

export default Navbar;
