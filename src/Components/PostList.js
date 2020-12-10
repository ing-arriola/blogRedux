import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";

const PostList = ({ fetchPosts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  return <div>POST LIST</div>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return { songs: state.songsList };
};

export default connect(null, fetchPosts)(PostList);
