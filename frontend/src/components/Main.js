import React, { Component } from 'react';
import CategoryList from './CategoryList';
import PostList from './PostList';
import { Grid } from 'semantic-ui-react';

class Main extends Component {
  
  render() {
    return (
      <Grid.Row>
        <Grid.Column width={4}>
          <CategoryList />
        </Grid.Column>
        <Grid.Column width={12}>
          <PostList category={ this.props.match.params.category }/>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default Main;