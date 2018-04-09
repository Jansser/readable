import * as API from '../utils/api';

import { 
  GET_POST_COMMENTS
} from './types';

export const getComments = (comments) => {
  return {
    type: GET_POST_COMMENTS,
    comments: comments
  };
}

export const fetchComments = (postId) => (dispatch) =>
  API.fetchComments(postId).then(data => 
    dispatch(getComments(data))
  );