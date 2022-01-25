import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';
import FormRegister from "../../../components/FormRegister";

const EditProfile = () => {
  const myProfile = JSON.parse(localStorage.getItem('data'))
  const data  = myProfile.data.data
  const [username, setUsername] = useState(data.username);
  const [fullName, setFullName] = useState(data.name);
  const [bio, setBio] = useState(data.bio);
  // const [score, setScore] = useState(data.score);

  const score = data.score
  
  const navigate = useNavigate();

  // useEffect(() => {
  //   const token  = sessionStorage.getItem("token");
  //   if (!token) {
  //       return navigate('/')
  //   }
  // }, [navigate])

  const handleSubmit = () => {
    const newData = {
      username,
      name: fullName,
      bio,
      id: data.id
    };
    axios
      .put(`http://localhost:${process.env.REACT_APP_PORT}/api/users/${newData.id}`, newData)
      .then((res) => {
        console.log('res update biodata:', res);
        localStorage.setItem('data', JSON.stringify(res))
        navigate('/profile')
      })
      .catch((err) => {
        console.log("error: ", err);
      });
  };

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
        score={score}
        textNotes="Back To Profile?"
        textLink="Klick Here"
        urlLink="/profile"
      />
    </>
  );
};

export default EditProfile;
