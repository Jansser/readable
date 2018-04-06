import React, { Component } from 'react';
import Main from './Main';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { Icon, Container, Grid } from 'semantic-ui-react';
import PostDetail from './PostDetails';

class App extends Component {
  render() {
    return (
      <Container>
        <h1>
          <Icon name='hand peace'/>Readable
        </h1>

        <Grid>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:category" component={props => <Main {...props} />} />
            <Route exact path="/post/:id" component={PostDetail} />
          </Switch>
        </Grid>
      </Container >
    );
  }
}

export default App;
