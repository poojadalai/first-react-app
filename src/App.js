import './App.css';
import ArticleList from './components/ArticleList';
import AwesomeAnimals from './components/AwesomeAnimals';
import LikeButton from './components/LikeButton';
import LikeCounter from './components/LikeCounter';

function App() {
  return (
    <div className="App">
      <ArticleList />
      
      <div>============================</div>
      <AwesomeAnimals />

      <div>============================</div>
    
      <LikeButton />

      <div>============================</div>
    
      <LikeCounter />
    </div>
  );
}

export default App;
