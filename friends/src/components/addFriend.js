import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

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

export default AddFriend;
