import React from "react";
// import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

import { LoginUser } from "../actions/actions";

const Login = props => {
  console.log(props);
  //   const history = useHistory();

  const login = event => {
    event.preventDefault();
    props.LoginUser(props.credentials);
    // history.push("/protected");
  };
  return (
    <div>
      <h1> Welcome to whatever this is!</h1>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          placheholder="username"
          //   value={props.credentials.username}
          //   onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          //   value={props.credentials.password}
          //   onChange={handleChange}
        />
        <button> Login</button>
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
export default connect(mapStateToProps, { LoginUser })(Login);
