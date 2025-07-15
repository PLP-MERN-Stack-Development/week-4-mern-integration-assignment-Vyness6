import { PostsProvider } from './context/PostsContext';
import { CategoriesProvider } from './context/CategoriesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PostsProvider>
        <CategoriesProvider>
          <App />
        </CategoriesProvider>
      </PostsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
