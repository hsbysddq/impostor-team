import axios from "axios";
import React from "react";
import { useState } from "react";
import FormRegister from "../../../components/FormRegister";

<<<<<<< HEAD:client/src/container/pages/EditProfil/EditProfil.jsx
const EditProfil = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onInputEmail = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handleSubmit = () => {
    const data = {
      username,
      email,
      password,
    };
    console.log("data: ", data);
    axios
      .post(`http://localhost:${process.env.REACT_APP_PORT}/api/register`, data)
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        setError(err.response.data);
        console.log("error: ", err.response.data);
      });
  };
=======
const EditProfile = () => {
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
>>>>>>> 0013d0c04a64c927611e69c6e27584a325e8cd59:client/src/container/pages/EditProfile/index.jsx

  return (
    <>
      <FormRegister
        title="Edit Profile"
        textButton="Update"
        isRegister={true}
        error={error}
        onInputUsername={(e) => setUsername(e.target.value)}
        onInputEmail={onInputEmail}
        onInputPassword={(e) => setPassword(e.target.value)}
        handleSubmit={handleSubmit}
        textNotes=""
        textLink=""
        urlLink=""
      />
    </>
  );
};

export default EditProfile;
