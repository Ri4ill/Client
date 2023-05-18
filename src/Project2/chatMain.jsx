import React, { useEffect, useState } from 'react'

const ChatMain = ({socket,username,room}) => {
    const [message,setMessage] = useState("")
    const [messageList,setMessageList] = useState([])
    const SendMessage = async() =>{
        if (message !== ""){
            const messageData = {
                room: room,
                author: username,
                message: message,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", messageData)
            setMessageList((list)=>[...list, messageData ])
        }
    }
    useEffect(()=>{
        socket.on("resive_message",(data)=>{
            console.log(data)
            setMessageList((list)=>[...list, data])
        })
    }, [socket])
  return (
    <div>
        <div className='Chat_header'>
            <p>Live Chat</p>
        </div>
        <div className='Chat_main'>
            {messageList.map((messageContent)=>{
                return <div className='message' id={username === messageContent.author ? "you":"other"}>
                        <h3>{messageContent.message}</h3>
                        <p>{messageContent.time +" "+ messageContent.author}</p>
                    </div>;
                })
            }
        </div>
        <div className='Chat_foother'>
            <input type="text" placeholder='sms' onChange={(e)=>{setMessage(e.target.value)}} onKeyDown={(e)=> {e.key === "Enter" && SendMessage()}}/>
            <button onClick={()=> SendMessage()}>&#9658;</button>
        </div>
    </div>
  )
}

export default ChatMain