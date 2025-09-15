const API_URL = "http://localhost:3000";

export const fetchUsers = () => fetch(`${API_URL}/users`).then(res => res.json());
export const createUser = (name) => fetch(`${API_URL}/users`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name }) }).then(res => res.json());

export const fetchPosts = () => fetch(`${API_URL}/posts`).then(res => res.json());
export const createPost = (userId, title, content) => fetch(`${API_URL}/posts`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ userId, title, content }) }).then(res => res.json());
