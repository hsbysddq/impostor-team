// import React, { useContext, useState } from 'react'
// import axios from 'axios'
// import { Form , Button} from 'react-bootstrap'
// import { Link } from 'react-router-dom'
import React from 'react'
import '../../../components/FormRegister/index.css'
import FormRegister from '../../../components/FormRegister'
// import { AuthContext } from '../../../App'
// const qs = require('query-string')
// const api = 'http://localhost:3001'

// export default function Login(props) {
//     const { dispatch } = useContext(AuthContext)

//     const initialState = {
//         email: '',
//         password: '',
//         isSubmitting: false,
//         errorMessage: null
//     }

//     const [data, setData] = useState(initialState)

//     const handleInputChange = (e) => {
//         setData({
//             ...data,
//             [e.target.name]: e.target.value
//         })
//     }

//     const handleFormSubmit = (e) => {
//         e.preventDefault()
//         setData({
//             ...data,
//             isSubmitting: true,
//             errorMessage: null
//         })

//         const requestBody = {
//             email: data.email,
//             password: data.password
//         }

//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         axios.post(api + '/login', qs.stringify(requestBody), config)
//         .then((res) => {
//             if(res.data.message === "success login"){
//                 dispatch({
//                     type: "LOGIN",
//                     payload: res.data
//                 })
//             }
//             else {
//                 setData({
//                     ...data,
//                     isSubmitting: false,
//                     errorMessage: res.data.Message
//                 })
//             }

//             throw res;
//         })
//     }

//     return (
//         <div className="bg row vh-100 align-items-center">
//             <div className="container col-auto offset-1">
//                 <h1 className="text-center">Login</h1>
//                 <Form>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" name="email" value={data.email} placeholder="Email" onChange={handleInputChange} />
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" name="password" value={data.password} placeholder="Password" onChange={handleInputChange} />
//                     </Form.Group>

//                     {data.errorMessage && (
//                         <div className="alert alert-danger" role="alert">
//                             {data.errorMassage}
//                         </div>
//                     )}

//                     <Button disabled={data.isSubmitting} variant="primary" onClick={handleFormSubmit} className="mb-3">
//                         {data.isSubmitting ? (
//                             "..Loading"
//                         ) : (
//                             "Login"
//                         )}
//                     </Button>
//                 </Form>
//             </div>
//         </div>
//     )
// }



export default function Login(props) {
    // const handleSubmit = () => {

    // }
    return (
        <div>
            <FormRegister 
                title="Login"
                textButton="Login"
                // onInputUsername={(e) => setUsername(e.target.value)}
                // onInputEmail={(e) => setEmail(e.target.value)}
                // onInputPassword={(e) => setPassword(e.target.value)}
                // handleSubmit={handleSubmit}
                textNotes="Lupa password?"
                textLink="Klik di sini"
                urlLink="/forgot-password"
            />
        </div>
    )
}
