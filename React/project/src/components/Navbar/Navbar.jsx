import MyButton from "components/UI/button/MyButton";
import { AuthContext } from "context";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };
  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        <Link to="/about">О сайте</Link>
        <Link to="/posts">Посты</Link>
      </div>
    </div>
  );
};

export default Navbar;
