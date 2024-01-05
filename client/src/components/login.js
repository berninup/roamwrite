import React, { useState } from 'react'
import axios from 'axios'

function LoginPage() {
    const url = "http://localhost:3000/users/login"
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(url, { email, password })
            
            console.log("Logged In")
        } catch (error) {
            setErrorMessage('Login failed. Please try again. ')
        }
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
          {errorMessage && <p>{errorMessage}</p>}
        </form>
      </div>
    )    
}

export default LoginPage