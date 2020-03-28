import React from "react";
import { Link } from "react-router-dom";

const Logout = () => {
  return (
    <div>
      <Link to="/" onClick={window.localStorage.removeItem("token")}>
        Log out
      </Link>
    </div>
  );
};
export default Logout;
