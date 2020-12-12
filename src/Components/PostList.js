import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";
import UserHeader from "./UserHeader";

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const postsRendered = posts.map((post) => (
    <div>
      <p key={post.id}>{post.title}</p>
      <UserHeader id={post.userId} />
    </div>
  ));

  return <div>{postsRendered}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
