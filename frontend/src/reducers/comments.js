import { 
  GET_POST_COMMENTS, 
  ADD_COMMENT, 
  DELETE_COMMENT 
} from '../actions/types';

const initialState = {
  comments: [],
  orderBy: '-voteScore'
}

const comments = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST_COMMENTS:
      return {
        ...state,
        comments: action.comments
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [ ...state.comments, action.comment ]
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id)
      };
    default:
      return state;
  }
};

export default comments;