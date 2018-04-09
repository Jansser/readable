import { GET_POST_COMMENTS } from '../actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default comments;