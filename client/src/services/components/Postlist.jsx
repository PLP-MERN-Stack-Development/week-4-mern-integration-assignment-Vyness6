import { useContext } from 'react';
import { PostsContext } from '../context/PostsContext';
import { Link } from 'react-router-dom';

function PostList() {
  const { posts, loading } = useContext(PostsContext);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <div key={post._id}>
          <h3>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PostList;
