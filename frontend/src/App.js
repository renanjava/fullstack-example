import { useState, useEffect } from 'react';
import { fetchUsers, createUser, fetchPosts, createPost } from './api';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  useEffect(() => {
    fetchUsers().then(setUsers);
    fetchPosts().then(setPosts);
  }, []);

  const handleAddUser = async () => {
    const newUser = await createUser(name);
    setUsers([...users, newUser]);
    setName('');
  };

  const handleAddPost = async () => {
    const newPost = await createPost(userId, title, content);
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h2>Users</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>

      <h2>Posts</h2>
      <select value={userId} onChange={e => setUserId(e.target.value)}>
        <option value="">Select User</option>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input placeholder="Content" value={content} onChange={e => setContent(e.target.value)} />
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map(p => <li key={p.id}>{p.title} by {p.user.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
