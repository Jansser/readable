import { guid } from './helpers';
const SERVER_URL = `http://localhost:3001`;
const options    = { 
  headers: { 
    Authorization: 'whatever-you-want', 
    'Content-Type': 'application/json' 
  } 
};

export const fetchCategories = () => {
    return fetch(`${SERVER_URL}/categories`, options)
    .then(response => response.json())
}

export const fetchPosts = () => {
    return fetch(`${SERVER_URL}/posts`, options)
    .then(response => response.json())
}

export const fetchPost = (id) => {
  return fetch(`${SERVER_URL}/posts/${id}`, options)
  .then(response => response.json())
}

export const fetchComments = (postId) => {
  return fetch(`${SERVER_URL}/posts/${postId}/comments`, options)
  .then(response => response.json())
}

export const fetchPostsByCategory = (category) => {
  return fetch(`${SERVER_URL}/${category}/posts`, options)
  .then(response => response.json())
}

export const createPost = (values) => {
  const { title, body, author, category } = values;

  const data = {
    id: guid(),
    timestamp: Date.now(),
    title,
    body,
    author,
    category
  }

  return fetch(`${SERVER_URL}/posts`, { 
    ...options,
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export const editPost = (id, values) => {
  const { title, body } = values;

  const data = {
    title,
    body
  }

  return fetch(`${SERVER_URL}/posts/${id}`, { 
    ...options,
    method: 'put',
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export const deletePost = (id) => {
  return fetch(`${SERVER_URL}/posts/${id}`, { 
    ...options,
    method: 'delete'
  }).then(response => response.json());
}

export const voteOnPost = (id, option) => {
  return fetch(`${SERVER_URL}/posts/${id}`, { 
    ...options,
    method: 'post',
    body: JSON.stringify({ option })
  }).then(response => response.json());
}

export const addComment = (postId, values) => {
  const { body, author } = values;
  
  const data = {
    id: guid(),
    timestamp: Date.now(),
    body,
    author,
    parentId: postId
  }

  return fetch(`${SERVER_URL}/comments`, { 
    ...options,
    method: 'post',
    body: JSON.stringify(data)
  }).then(response => response.json());
}

export const editComment = (id, values) => {
  const { body } = values;

  const data = {
    timestamp: Date.now(),
    body
  }

  return fetch(`${SERVER_URL}/comments/${id}`, { 
    ...options,
    method: 'put',
    body: JSON.stringify(data)
  }).then(response => response.json());
}


export const deleteComment = (id) => {
  return fetch(`${SERVER_URL}/comments/${id}`, { 
    ...options,
    method: 'delete'
  }).then(response => response.json());
}


export const voteOnComment = (id, option) => {
  return fetch(`${SERVER_URL}/comments/${id}`, { 
    ...options,
    method: 'post',
    body: JSON.stringify({ option })
  }).then(response => response.json());
}