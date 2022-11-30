import './App.css';
import AddPostForm from './features/AddPostForm';
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
