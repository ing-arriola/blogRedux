import React, { useEffect } from "react";
import { connect } from "react-redux";
import UserHeader from "./UserHeader";
import { fectchPostsAndUsers } from "../Actions";

const PostList = ({ fectchPostsAndUsers, posts }) => {
  useEffect(() => {
    fectchPostsAndUsers();
  }, []);

  const postsRendered = posts.map((post) => (
    <div key={post.id}>
      <p>{post.title}</p>
      <UserHeader id={post.userId} />
    </div>
  ));

  return <div>{postsRendered}</div>;
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fectchPostsAndUsers })(PostList);
