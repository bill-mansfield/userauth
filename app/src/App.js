import React from 'react';
import logo from './logo.svg';
import './App.css';

import firebase from './firebase';
import "firebase/auth";
import "firebase/firestore";

var firebaseui = require('firebaseui');
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD,
      requireDisplayName: true
    }
  ]
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Keep It Tight</h1>
        <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div>
      </header>
    </div>
  );
}

export default App;
