import React, { useState, useEffect } from "react";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = props => {
  const [newFriend, setNewFriend] = useState([]);

  const Friend = {
    key: Date.now(),
    name: "",
    height: "",
    age: "",
    id: "9257902"
  };

  //   const handleChanges = e => {
  //     setState({
  //       [e.target.name]: e.target.value
  //     });
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then(res => {
        setNewFriend(res.data);
      })
      .catch(err => {
        console.log("You dont have friends ", err);
      });
  };
  return (
    <form
    // onSubmit = { handleSubmit }
    >
      <input
        type="text"
        name="friendData"
        //   value={Friend}
        //   onChange={handleChanges}
      />
      <button>New Friend</button>
    </form>
  );
};

export default AddFriend;
