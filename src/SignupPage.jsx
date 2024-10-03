import axios from 'axios';
import { useState } from 'react';


export function SignupPage () { 
  const [ errors, setErrors ] = useState([]);

  const handleSubmit = (event) => { 
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post('http://localhost:3000/users.json', params)
      .then((response) => { 
        console.log(response.data);
        event.target.reset();
        window.location.hred = '/';
      })
      .catch((error) => { 
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      })
  };

  return ( 
    <div>
      <h1>Signup Here!</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name='name' type='text' required />
        </div>
        <div>
          Email: <input name='email' type='email' required />
        </div>
        <div>
          Password: <input name='password' type='password' required />
        </div>
        <div>
          Password Confirmation: <input name='password_confirmation' type='password_confirmation' />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  )
}