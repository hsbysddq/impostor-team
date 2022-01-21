import React, { useState } from "react";
import axios from "axios";

import FormRegister from "../../../components/FormRegister";

function Register(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('')

  const onInputEmail = (e) => {
    setEmail(e.target.value)
    setError('')
  }

  const handleSubmit = () => {
    const data = {
      username,
      email,
      password,
    };
    console.log("data: ", data);
    axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/register`, data)
    .then((res) => {
      console.log("success");
    })
    .catch((err) => {
      setError(err.response.data)
      console.log("error: ", err.response.data);
    })
  };

  return (
    <div>
      <FormRegister
        title="Register"
        textButton="Register"
        isRegister={true}
        error={error}
        onInputUsername={(e) => setUsername(e.target.value)}
        onInputEmail={onInputEmail}
        onInputPassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
        textNotes="Sudah Punya Akun?"
        textLink="Login Sekarang"
        urlLink="/login"
      />
    </div>
  );
}

export default Register;
