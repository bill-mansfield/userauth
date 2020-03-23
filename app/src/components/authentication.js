import React from 'react';
import firebase from './firebase';
import "firebase/auth";

//components
import SignedIn from './signedIn';
import SignIn from './signIn';

  export default function Authentication() {

    const chooseView = () => {
        var user = firebase.auth().onAuthStateChanged;
  
        if (user) {
            return (<SignedIn />)
        } else {
            return (<SignIn />)
        }
    }

	return (
        <>
            { chooseView() }
        </>
    );
}
