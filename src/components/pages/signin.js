import React from "react";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { googleAuthProvider } from "../../firebase/config";
import { LOGIN_WITH_GOOGLE } from "../../redux/actions/user.actions";
import {connect} from 'react-redux';

const SignIn = (props) => {
  const firebase = useFirebase();
  const history = useHistory();

  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(result => {
        // Google Access Token.
        const token = result.credential.accessToken;
        console.log('access_token',token);
        // user info.
        const user = result.user;
        console.log('User', user);
        history.push('/');
        // ...
    }).catch(error => {
        console.log('Error', error)
    });
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.dispatch(LOGIN_WITH_GOOGLE())
        }}
      >
        Sign In with Google
      </button>
    </div>
  );
};
export default connect()(SignIn);