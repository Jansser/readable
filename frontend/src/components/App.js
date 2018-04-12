import React, { Component } from 'react';
import Main from './Main';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react';
import PostDetail from './PostDetails';
import PostForm from './PostForm';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <Container>
          <Grid>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route exact path="/post/new"  component={props => <PostForm {...props} />} />
              <Route exact path="/:category" component={props => <Main {...props} />} />
              <Route exact path="/post/:id" component={PostDetail} />
              <Route exact path="/post/edit/:id" component={props => <PostForm {...props} />} />
            </Switch>
          </Grid>
        </Container >
      </div>
    );
  }
}

export default App;
