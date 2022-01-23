import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';
import FormRegister from "../../../components/FormRegister";

const EditProfile = () => {
<<<<<<< HEAD
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
=======
  const myProfile = JSON.parse(localStorage.getItem('data'))
  const data  = myProfile.data.user
>>>>>>> def31b49357db59cd487c769485e125e7484039e

  const [username, setUsername] = useState(data.username);
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log('diklik');
    const newData = {
      username,
      name: fullName,
      bio,
      id: data.id
    };
    console.log("data: ", newData);
    axios
      .put(`http://localhost:${process.env.REACT_APP_PORT}/api/users/${newData.id}`, newData)
      .then((res) => {
        console.log("res success:", res);
        navigate('/profile')
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };
<<<<<<< HEAD

=======
>>>>>>> def31b49357db59cd487c769485e125e7484039e

  return (
    <>
      <FormRegister
        title="Edit Profile"
        textButton="Update"
        isRegister={true}
        isAuth={false}
        isEdit={true}
        onInputUsername={(e) => setUsername(e.target.value)}
        onInputFullName={(e) => setFullName(e.target.value)}
        onInputBio={(e) => setBio(e.target.value)}
        handleSubmit={handleSubmit}
        username={username}
        fullName={fullName}
        bio={bio}
        textNotes="Back To Profile?"
        textLink="Klick Here"
        urlLink="/profile"
      />
    </>
  );
};

export default EditProfile;
