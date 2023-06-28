import React from 'react';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import axios from 'axios';
// import Reg from './components/Reg';
// import Login from './components/Login';
// import Posts from './components/Posts';
// import PostForm from './components/PostForm';

function App() {

    // const logoutFunc = () => {
    //     axios.get('http://localhost:8000/api/logout', { withCredentials: true })
    //         .then(res => console.log(res.data.msg))
    // }

    return (
        <div>
            <TopBar />
            <Navbar />
            <Hero />
            <Activities />
            <Booking />
            <Gallery />
            <Contact />
            <Footer />
            {/* <button onClick={logoutFunc}>Logout</button> */}
            {/* <Reg />
            <Login />
            <PostForm />
            <Posts /> */}
        </div>
    )
}

export default App;
