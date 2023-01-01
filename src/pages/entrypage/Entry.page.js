import React, { useState } from "react";
import { Forgetpass } from "../../components/Forgetpassword/Forgetpass";
import { Login } from "../../components/login/Login.comp";
import "./entrypage.css";
export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState("login");
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("error");
    }
    console.log(email, password);
  };
  const handleResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("error");
    }
    console.log(email);
  };
  const toggleHandler = (formType) => {
    setToggle(formType);
  };
  return (
    <div className="entry-page bg-info ">
      <div className="jumbotron form-box">
        {toggle === "login" && (
          <Login
            handleOnchange={handleOnchange}
            email={email}
            password={password}
            handleSubmit={handleSubmit}
            toggleHandler={toggleHandler}
            setToggle={setToggle}
          />
        )}
        {toggle === "forget" && (
          <Forgetpass
            handleOnchange={handleOnchange}
            email={email}
            toggleHandler={toggleHandler}
            handleResetSubmit={handleResetSubmit}
          />
        )}
      </div>
    </div>
  );
};
