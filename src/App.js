import './App.css';
import ArticleList from './components/ArticleList';
import AwesomeAnimals from './components/AwesomeAnimals';
import LikeButton from './components/LikeButton';
import LikeCounter from './components/LikeCounter';
import Title from './components/Title';

function App() {
  return (
    <div className="App">

      <Title text="MY FIRST REACT APP"/>
      <div>============================</div>
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
