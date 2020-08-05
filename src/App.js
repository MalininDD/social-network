import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';


const App = () => {
  return (
    <div class="wrapper">
      <div class="content">
        <Header />
        <Main />
        <About />
      </div>
    </div>
  );
}

export default App;
