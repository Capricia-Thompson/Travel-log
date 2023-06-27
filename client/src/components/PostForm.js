import React, { useState } from 'react';
import axios from 'axios';

const PostForm = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    })

    const changeHandler = (e) => {
        let { name, value } = e.target
        setPost({
            ...post,
            [name]: value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/post', post, { withCredentials: true })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setPost({
            title: "",
            body: ""
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Title</label>
                    <input type="text" name='title' value={post.title} onChange={changeHandler} />
                </div>
                <div>
                    <label>Body</label>
                    <input type="text" name='body' value={post.body} onChange={changeHandler} />
                </div>
                <input type="submit" value="Post It"></input>
            </form>
        </div>
    )
}

export default PostForm