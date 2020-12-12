import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../Actions";

const UserHeader = ({ id, fetchUser, user }) => {
  useEffect(() => {
    fetchUser(id);
  }, []);

  const userRedered = user ? user.name : null;

  return <div>userHeader {userRedered}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
