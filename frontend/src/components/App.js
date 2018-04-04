import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <h1>Readable</h1>

        <CategoriesList />
      </div>
    );
  }
}

export default App;
