import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../Actions";

const PostList = ({ fetchPosts, posts }) => {
  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  const postsRendered = posts.data
    ? posts.data.map((post) => <p>{post.title}</p>)
    : "PUTA";

  return <div>{postsRendered}</div>;
};

const mapStateToProps = (state) => {
  console.log(state);

  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
