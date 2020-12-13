import React from "react";
import { connect } from "react-redux";

const UserHeader = ({ user }) => {
  const userRedered = user ? user.name : null;

  return <div>userHeader {userRedered}</div>;
};

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.id) };
};

export default connect(mapStateToProps)(UserHeader);
