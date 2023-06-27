import React, { useState } from 'react'
import axios from "axios"

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/login`, user, { withCredentials: true })
            .then(res => console.log("Successful log in!"))
            .catch(err => {
                console.log(err.response.data.msg)
            })
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={changeHandler} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={changeHandler} />
                </div>

                <button> Login </button>
            </form>
        </div>
    )
}

export default Login

