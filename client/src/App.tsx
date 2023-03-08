import React from 'react'
import './App.css'

function App() {
  const [UserID, setUserID] = React.useState<number>(0)
  const [User, setUser] = React.useState()
  const getUser = () => {
    fetch('http://localhost:8001/Users/' + UserID)
      .then(result => result.json())
      .then(body => setUser(body))
    console.log(User)
  }
  return (
    <div className="Chatroom">
      <h1>Chatroom</h1>
      <input value={UserID} onChange={e => setUserID(parseInt(e.target.value))} />
      <button onClick={getUser}>Find User</button>
      <p>{JSON.stringify(User, null, 2)}</p>
    </div>
  )
}

export default App
