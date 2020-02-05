const PostReducer = (state = [], action) => {
  /*  if(action.type === "FETCH_POSTS"){
        return action.payload;
    }
    return state; */
  //more Common state.
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export default PostReducer;
