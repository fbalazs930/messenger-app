import { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import Message from './Message';

function App() {
  const[input,setInput] = useState('');
  const[messages,setMessages] = useState([]);
  const[username,setUsername] = useState('');

  useEffect(()=>{
    setUsername(prompt('Felhasználónév:'));
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=>doc.data()));
    });
  }, []);  

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  };

  return (
    <div className="App">
      <form action="">
        <input value={input} type="text" onChange={e => setInput(e.target.value)}/>
        <button type='submit' onClick={sendMessage}>Send</button>
      </form>
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
