import './App.css';
import React from 'react';
import Reg from './components/Reg';
import Login from './components/Login';
import axios from 'axios';
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {

    const logoutFunc = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => console.log(res.data.msg))
    }

    return (
        <div className='flex justify-around'>
            <button onClick={logoutFunc}>Logout</button>
            <Reg />
            <Login />
            <PostForm />
            <Posts />
        </div>
    )
}

export default App;
