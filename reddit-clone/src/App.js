import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Posts from './features/posts/Posts';
import SubredditList from './features/subreddits/SubredditList';

function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/fea5adb682.js" crossorigin="anonymous"></script>
      <Header />
      <div className="body">
        <Posts />
        <SubredditList />
      </div>
    </div>
  );
}

export default App;
