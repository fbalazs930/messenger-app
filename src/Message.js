import React from 'react'

export default function Message({message, username}) {
    const isUser = username === message.username;
    return (
        <div>
            <p className={`message ${isUser ? 'user' : 'not-user'}`}>{message.username}: {message.message}
            </p>
        </div>
    )
}
