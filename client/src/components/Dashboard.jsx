import React from 'react'

const Dashboard = () => {

   const logoutFunc = () => {
        axios.get('http://localhost:8000/api/logout', { withCredentials: true })
            .then(res => console.log(res.data.msg))
    }

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="rounded-lg text-2xl text-white font-bold p-3 border-2 border-white"onClick={logoutFunc}>Logout</button>
    </div>
  )
}

export default Dashboard