import React, { useState } from "react";
import { connect } from "react-redux";

import { LoginUser } from "../actions/friendsActions";

const Login = props => {
  const [login, setLogin] = useState(props.credentials);

  const handleChange = e => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    });
  };
  const loginButton = e => {
    e.preventDefault();
    props.LoginUser(login);
    props.history.push("/protected");
  };
  return (
    <div>
      <h1>Welcome to the Friends App!</h1>
      <form onSubmit={loginButton}>
        <input
          type="text"
          name="username"
          // value={props.credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          // value={props.credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    credentials: state.credentials,
    error: state.error
  };
};
export default connect(mapStateToProps, {
  LoginUser
})(Login);
