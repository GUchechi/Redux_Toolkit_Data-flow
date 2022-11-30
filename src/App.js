import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostLists from './features/posts/PostLists';

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostLists />
    </div>
  );
}

export default App;
