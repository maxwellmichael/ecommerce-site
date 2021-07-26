import React from "react";
import { LOGIN_WITH_GOOGLE } from "../../redux/actions/user.actions";
import {connect} from 'react-redux';

const SignIn = (props) => {

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