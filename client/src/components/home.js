import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserHome from './userHome'
import PublicHome from './publicHome'

function Home() {
    const url = "http://localhost:3000/users/auth-check"
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        axios.get(url, { withCredentials: true })
            .then(response => {
                console.log(response.data)
                if (response.data.isLoggedIn) {
                    setIsLoggedIn(true)
                } else {
                    setIsLoggedIn(false)
                }
            })
            .catch(error => {
                console.error("Error checking sessions: ", error)
            })
    }, [])
    
    return (
        <div>
            {isLoggedIn ? <UserHome setIsLoggedIn={setIsLoggedIn}/> : <PublicHome />}
        </div>
    )
}

export default Home