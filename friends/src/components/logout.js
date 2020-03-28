import React from "react";
import { Link } from "react-router-dom";

const remove = window.localStorage.removeItem("token");
const Logout = () => {
  return (
    <div>
      <Link to="/" onClick={remove}>
        Log out
      </Link>
    </div>
  );
};
export default Logout;
