import { 
  GET_POST_COMMENTS, 
  ADD_COMMENT, 
  DELETE_COMMENT,
  SELECT_COMMENT,
  EDIT_COMMENT,
  VOTE_ON_COMMENT
} from '../actions/types';

const initialState = {
  comments: [],
  comment: {},
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
        comments: [ ...state.comments, action.comment ],
        comment: {}
      }
    case EDIT_COMMENT:
      return {
        comments: state.comments.map( comment => comment.id === action.comment.id ? action.comment : comment ),
        comment: {}
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.comment.id),
        comment: {}
      };
    case VOTE_ON_COMMENT:
      return {
        ...state,
        comments: state.comments.map( comment => comment.id === action.comment.id ? action.comment : comment ),
        comment: action.comment
      };
    case SELECT_COMMENT:
      return {
        ...state,
        comment: action.comment
      }  
    default:
      return state;
  }
};

export default comments;