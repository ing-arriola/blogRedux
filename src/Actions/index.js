import jsonPlaceHolder from "../API/jsonPlaceHolder";
import _ from "lodash";
export const fectchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //await is here for this line to wait until fetchPosts finish to get all posts

  const userIds = _.uniq(_.map(getState().posts, "userId")); //user ID is a key inside of posts

  //userIds.map(id => dispatch(fetchUser(id)))
  await Promise.all(userIds.map((id) => dispatch(fetchUser(id))));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};
