import * as API from '../utils/api';

import { 
  GET_POST_COMMENTS,
  ADD_COMMENT,
  DELETE_COMMENT,
  SELECT_COMMENT,
  EDIT_COMMENT
} from './types';

export const getComments = (comments) => {
  return {
    type: GET_POST_COMMENTS,
    comments: comments
  };
}

export const addCommentSuccess = (data) => {
  return {
    type: ADD_COMMENT,
    comment: data
  };
}

export const deleteCommentSuccess = (data) => {
  return {
    type: DELETE_COMMENT,
    comment: data
  };
}

export const editCommentSuccess = (data) => {
  return {
    type: EDIT_COMMENT,
    comment: data
  };
}

export const selectedComment = (data) => {
  return {
    type: SELECT_COMMENT,
    comment: data
  }
}

export const fetchComments = (postId) => (dispatch) =>
  API.fetchComments(postId).then(data => 
    dispatch(getComments(data))
);

export const addComment = (postId, values, callback) => (dispatch) => 
  API.addComment(postId, values).then(data =>  {
    callback();
    dispatch(addCommentSuccess(data))
  }
);

export const editComment = (id, values, callback) => (dispatch) => 
  API.editComment(id, values).then(data =>  {
    callback();
    dispatch(editCommentSuccess(data))
  }
);

export const deleteComment = (id, callback) => (dispatch) => 
  API.deleteComment(id).then(data =>  {
    callback();
    dispatch(deleteCommentSuccess(data))
  }
);

export const selectComment = (comment) => (dispatch) => {
  dispatch(selectedComment(comment));
}
