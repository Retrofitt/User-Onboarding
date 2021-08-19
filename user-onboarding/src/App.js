
import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './Components/Form'
import axios from 'axios';
import * as yup from 'yup';
import schema from './Validation/userSchema';

const initialUserValues = {
  username: '',
  email: '',
  password: '',
  tos: false
}


const initialUserErrors = {
  username: '',
  email: '',
  password: '',
}

const initialDisabled = false

export default function App() {

  const [users, setUsers] = useState([]);
  const [disabled, setDisabled] = useState(initialDisabled);   
  const [userValues, setUserValues] = useState(initialUserValues);
  const [userErrors, setUserErrors] = useState(initialUserErrors);

  const postNewUser = newUser =>{
    axios.post('https://reqres.in/api/users', newUser)
      .then(res =>{
        setUsers([res.data, ...users])
      }).catch(err => console.error(err));
  }
  
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setUserErrors({ ...userErrors, [name]: '' }))
      .catch(err => setUserErrors({ ...userErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setUserValues({...userValues, [name]: value})
  }

  const submitForm = () => {
    const newUser = {
      username: userValues.username.trim(),
      email: userValues.email.trim(),
      password: userValues.password.trim(),
      tos: userValues.tos
    }

    
    postNewUser(newUser)
    setUsers([newUser, ...users]);
  } 

  useEffect(() => {
    schema.isValid(userValues).then(valid => setDisabled(!valid))
  }, [userValues])


  return (
    <div className="App">
      <Form 
        values={userValues}
        change={inputChange}
        submit={submitForm}
        disabled={disabled}
        errors={userErrors} />
      
        {users.map(user =>{
          return (
          <pre key={user.id}>
            {user.username}
            {user.email}
          </pre>
        )})}
    </div>
  );
}
