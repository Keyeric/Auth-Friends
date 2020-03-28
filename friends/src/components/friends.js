import React from "react";
import { connect } from "react-redux";

import AddFriend from "./addFriend";
import Logout from "./logout";
import { getFriends } from "../actions/friendsActions";

const Friends = props => {
  const goButton = e => {
    e.preventDefault();
    props.getFriends();
  };

  return (
    <div className="FriendsList">
      <div className="Header">
        <h1> Friends</h1>
        <Logout />
      </div>
      <section className="Ppl">
        <button onClick={goButton}>
          SUPER ROBOT MONKEY TEAM HYPER FORCE GO
        </button>
        {props.error && <p>{props.error}</p>}
        {props.friends.map(ppl => (
          <div key={ppl.id}>
            <span>
              <h3>{ppl.name}</h3>
              <p>Age: {ppl.age}</p>
              <h5>Email address: {ppl.email}</h5>
            </span>
          </div>
        ))}
        <div className="Form">
          <p>Missing a Friend?</p>
          <AddFriend />
        </div>
      </section>
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
  getFriends
})(Friends);
