import React, { useState } from "react";
import { connect } from "react-redux";

import { getFriends, newFriend } from "../actions/friendsActions";

const AddFriend = props => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
  });

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.newFriend(newFriend);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChanges}
        />
        <br />
        <input
          type="number"
          name="age"
          placeholder="Age"
          onChange={handleChanges}
        />
        <br />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChanges}
        />
        <br />
        <button>New Friend</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error
  };
};
export default connect(mapStateToProps, {
  getFriends,
  newFriend
})(AddFriend);
