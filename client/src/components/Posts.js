import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Posts = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/posts', { withCredentials: true })
            .then(res => setPosts(res.data))

    }, [posts]

    )

    return (
        <div>
            {posts.map((entry, idx) => <p key={idx}>{entry.title}</p>)}
        </div>
    )
}

export default Posts