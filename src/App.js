import { useState, useEffect } from 'react';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import Message from './Message';
import ScrollToBottom from 'react-scroll-to-bottom';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Felhasználónév:'));
    db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()));
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
    <ScrollToBottom>
      <div className="App">
        <div className="messages">
          {
            messages.map(message => (
              <Message username={username} message={message} />
            ))
          }
        </div>
        <form action="">
          <input placeholder='Aa' value={input} type="text" onChange={e => setInput(e.target.value)} />
          <button type='submit' onClick={sendMessage}><i className="fas fa-paper-plane"></i></button>
        </form>
      </div>
    </ScrollToBottom>
  );
}

export default App;
