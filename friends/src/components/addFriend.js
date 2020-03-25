import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [newFriend, setNewFriend] = useState({
    name: "",
    height: "",
    age: ""
  });

  const handleChanges = e => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        props.setFriendsList(res.data);
      })
      .catch(err => {
        console.log("You dont have friends ", err);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        // value={newFriend.name}
        onChange={handleChanges}
      />
      <br />
      <input
        type="number"
        name="age"
        placeholder="Age"
        // value={newFriend.age}
        onChange={handleChanges}
      />
      <br />
      <input
        type="text"
        name="email"
        placeholder="Email"
        // value={newFriend.height}
        onChange={handleChanges}
      />
      <br />
      <button>New Friend</button>
    </form>
  );
};

export default AddFriend;
