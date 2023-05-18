import React,{useEffect,useState} from 'react'
import ChatMain from './chatMain'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

const Chat = () => {
    const [username,setUsername] = useState('')
    const [room,setRoom] = useState('')
    const [showChat,setShowChat] = useState(true)

    
    const JoinRoom = () =>{
      if (username!== "" && room !== ""){
        setShowChat(!showChat)
        socket.emit("join_room",room)
      }
    }
  return (
    <div>
      {showChat ? (
        <div>
          <h3>Join Chat</h3>
          <input type="text"  placeholder='Jone...' onChange={(event)=> {setUsername(event.target.value)}}/>
          <input type="text"  placeholder='Room id...' onChange={(event)=> {setRoom(event.target.value)}}/>
          <button onClick={()=> {JoinRoom()}}>Join</button>
        </div>
      )
      :(
      <ChatMain socket={socket} username={username} room={room}/>
      )}
    </div>
  )
}

export default Chat