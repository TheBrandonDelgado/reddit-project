import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Posts from './features/posts/Posts';

function App() {
  return (
    <div className="App">
      <script src="https://kit.fontawesome.com/fea5adb682.js" crossorigin="anonymous"></script>
      <Header />
      <Posts />
    </div>
  );
}

export default App;
