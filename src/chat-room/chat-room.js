
import React, { Component } from 'react';
import * as firebase from 'firebase'; 

const config = {
  apiKey: "AIzaSyAS0450kYF4gHKyUjGVJc2aukkMEi6vKt8",
  authDomain: "chat-app-1de38.firebaseapp.com",
  databaseURL: "https://chat-app-1de38.firebaseio.com",
  projectId: "chat-app-1de38",
  storageBucket: "chat-app-1de38.appspot.com",
  messagingSenderId: "8283475367"
};
const settings = {timestampsInSnapshots: true};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore().settings(settings)
}

const db = firebase.firestore();

class ChatRoomComponent extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      message: '', 
      data: []
    }

    this.onTextInput = (event) => {
      this.setState({
        message: event.target.value,
      })
    }

    this.onSubmit = (e) => {
      const { message } = this.state; 
      if (message.lenght != 0) {
        this.setState({
          message: '',
        })
      }
      this.writeMessageToDB(message)     
    }

    this.onClick = (n) => {
      db.collection("users").add({
        first: "rah",
        last: "hoge",
        born: n
      }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
    }

    this.readData = () => {
      let arr = [];
      console.log("start calling firebase")
      db.collection("users").get()
      .then((querySnapshot) => {
        console.log("successto load")
        querySnapshot.forEach((doc) => {
          arr = [...arr, doc.data()];
        });
        this.setState({
          data: arr
        })
      });  
      console.log("hogehoge")    
    }
  }

  writeMessageToDB = (message) => {
    //firebase.database().ref("messages/").push({message: message})
  }

  render() {
    const arr = [1, 10, 100, 1000];
    return (
      <div>
        {arr.map((n,i) => <button key={i} onClick={() => this.onClick(n)}>Number {n}</button>)}
        <h1>{this.state.message}</h1>
        <input
          type="text" 
          placeholder="input your message ..."
          value={this.state.message}
          onChange={(e) => this.onTextInput(e)}/>

        <button 
          onClick={e => this.onSubmit(e)}>Submit</button>
        Hello, this is Chat Room
        <button onClick={this.readData}>READ DATA</button>
        <ul>
          {this.state.data.map((d, i) => (
            <li key={i}>
              <span>{d.born}</span>
              <span>{d.first}</span>
              <span>{d.last}</span>
            </li>
          ))}
        </ul>
        <style jsx>{`
          input {
            line-height: 4rem; 
            width: 20rem; 
            font-size: 2rem; 
          }
        `}</style>
      </div>
    );
  }
}  
  export default ChatRoomComponent;