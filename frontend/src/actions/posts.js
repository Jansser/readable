import * as API from '../utils/api';
import { GET_POSTS } from './types';

export const getPosts = (posts) => {
    return {
        type: GET_POSTS,
        posts: posts
    };
}

export const fetchPosts = () => (dispatch) =>
    API.fetchPosts().then(data => {
        dispatch(getPosts(data))
    }
);
