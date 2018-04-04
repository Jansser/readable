import React, { Component } from 'react';
import CategoryList from './CategoryList';
import PostList from './PostList';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>Readable</h1>

        <CategoryList />
        <PostList />
      </div>
    );
  }
}

export default App;
