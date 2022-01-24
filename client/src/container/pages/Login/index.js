import axios from "axios";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import FormRegister from "../../../components/FormRegister";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const onInputEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const onInputPassword = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .post(
        `http://localhost:${process.env.REACT_APP_PORT}/api/login`,
        data,
        config
      )
      .then((res) => {
        console.log("res login: ", res);
        const token = res.data.token;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("username", res.data.data.data.username);
        const userToken = sessionStorage.getItem("token");
        if (userToken) {
          localStorage.setItem("data", JSON.stringify(res.data));
          // localStorage.setItem("userId", res.data.data.user.id);
          setRedirect(true);
        }
      })
      .catch((err) => {
        setError(err.response.data.message);
        console.log("err: ", err.response.data.message);
      });
  };

  // const getToken = () => sessionStorage.getItem("token");

  return (
    <div>
      {redirect && <Navigate to="/homepage" />}
      <FormRegister
        title="Login"
        textButton="Login"
        isRegister={false}
        isAuth={true}
        isEdit={false}
        error={error}
        onInputEmail={onInputEmail}
        onInputPassword={onInputPassword}
        handleSubmit={handleSubmit}
        textNotes="Lupa password?"
        textLink="Klik di sini"
        urlLink="/forgot-password"
      />
    </div>
  );
}

export default Login;
