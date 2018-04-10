import React, { Component } from 'react';
import Main from './Main';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { Icon, Container, Grid, Header } from 'semantic-ui-react';
import PostDetail from './PostDetails';
import PostForm from './PostForm';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Container>
        <Link to='/'>
          <Header as='h1'>
            <Icon name='hand peace'/>Readable
          </Header>
        </Link>

        <Grid>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/post/new"  component={PostForm} />
            <Route exact path="/:category" component={props => <Main {...props} />} />
            <Route exact path="/post/:id" component={PostDetail} />
            <Route exact path="/post/edit/:id" component={props => <PostForm {...props} />} />
          </Switch>
        </Grid>
      </Container >
    );
  }
}

export default App;
