import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClickButton from './ClickButton';
import PostList from './PostList';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<div> <ClickButton/> </div>*/}
          <TodoList/>
          {/*<PostList/>*/}
        </header>
      </div>
    );
  }
}

export default App;
