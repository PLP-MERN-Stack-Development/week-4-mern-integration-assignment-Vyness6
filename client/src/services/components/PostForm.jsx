import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PostsContext } from '../context/PostsContext';

function PostForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchPosts } = useContext(PostsContext);

  const onSubmit = async (data) => {
    const method = id ? 'PUT' : 'POST';
    const url = id
      ? `http://localhost:5000/api/posts/${id}`
      : `http://localhost:5000/api/posts`;

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    fetchPosts(); // refresh posts
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('title', { required: 'Title is required' })}
        placeholder="Title"
      />
      {errors.title && <p>{errors.title.message}</p>}

      <textarea
        {...register('content', { required: 'Content is required' })}
        placeholder="Content"
      />
      {errors.content && <p>{errors.content.message}</p>}

      <button type="submit">{id ? 'Update' : 'Create'} Post</button>
    </form>
  );
}

export default PostForm;
