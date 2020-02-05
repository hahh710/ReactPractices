import jsonPlaceholder from "../apis/JsonPlaceholders";
import _ from "lodash";

export const fetchPosts = () => async dispatch => {
  //Applying Redux-Thunk
  //This Function will not return any value until it gets the data from outside
  const response = await jsonPlaceholder.get("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//Id of User that we want to fetch
export const fetchUser = id => dispatch => {
  //rather than '/user/' + {id}
  //ES2016 `/users/${id}`
  //    const response = await jsonPlaceholder.get(`/users/${id}`);
  //    dispatch({ type: "FETCH_USER", payload: response.data });
  _fetchUser(id, dispatch);
};
// _.memoize를 사용하기!
const _fetchUser = () =>
  _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type: "FETCH_USER", payload: response.data });
  });
