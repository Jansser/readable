const SERVER_URL = `http://localhost:3001`;
const options    = { headers: { Authorization: 'whatever-you-want' } };

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