import React, { useState, useEffect } from "react";
import AddFriend from "./addFriend";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const Friends = props => {
  const [friendsList, setFriendsList] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`http://localhost:5000/api/friends`)
      .then(res => {
        setFriendsList(res.data);
      })
      .catch(err => {
        console.log("Do you even have friends? ", err);
      });
  }, []);

  return (
    <div>
      <h1> Friends</h1>
      <section>
        {friendsList.map(ppl => (
          <div key={ppl.id}>
            <span>
              <h3>{ppl.name}</h3>
              <p>Age: {ppl.age}</p>
              <h5>Email address: {ppl.email}</h5>
            </span>
          </div>
        ))}
        <div>
          <p>Missing a Friend?</p>
          <AddFriend
            friendsList={friendsList}
            setFriendsList={setFriendsList}
          />
        </div>
      </section>
    </div>
  );
};

export default Friends;
