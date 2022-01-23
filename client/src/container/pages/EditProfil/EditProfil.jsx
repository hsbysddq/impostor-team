import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const EditProfil = () => {
      const [name, setName] = useState("");
      const [username, setUsername] = useState("");
      const [email, setEmail] = useState("");
      const [bio, setBio] = useState("");
      const navigate = useNavigate();
      const {id} = useParams();
    
      // const onInputEmail = (e) => {
      //   setEmail(e.target.value)
      //   setError('')
      // }
    
      // const handleSubmit = () => {
      //   const data = {
      //     username,
      //     email,
      //     password,
      //     name,
      //     bio,
      //     avatar,
      //     resetPasswordLink,
      //   };
      //   console.log("data: ", data);
      //   axios.post(`http://localhost:${process.env.REACT_APP_PORT}/api/users`, data)
      //   .then((res) => {
      //     console.log("success");
      //   })
      //   .catch((err) => {
      //     setError(err.response.data)
      //     console.log("error: ", err.response.data);
      //   })
      // };

      const updateUser = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:${process.env.REACT_APP_PORT}/api/users/${id}`,{
          name: name,
          username: username,
          email: email,
          bio: bio
        });
        navigate('/homepage/profile')
      }

      useEffect(()=>{
        const getUserById = async () => {
          const response = await axios.get(`http://localhost:${process.env.REACT_APP_PORT}/api/users/${username}`);
          setName(response.data.name);
          setUsername(response.data.username);
          setEmail(response.data.email);
          setBio(response.data.bio);
        }
        getUserById();
      }, [username]);

      
      

  return (
      <>
      <Form onSubmit={updateUser} className='container mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
              type="text" 
              placeholder="Enter full name"
              value={name}
              onChange={(e)=> setName(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
              type="text" 
              placeholder="Enter username"
              value={username}
              onChange={(e)=> setUsername(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
              type="email" 
              placeholder="Enter email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control 
              as='textarea' 
              rows={3} 
              placeholder="Enter bio"
              value={bio}
              onChange={(e)=> setBio(e.target.value)} /> 
        </Form.Group>
        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
      </>
  );
};

export default EditProfil;
