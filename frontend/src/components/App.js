import React, { Component } from 'react';
import Main from './Main';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { Container, Grid } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/:category" component={props => <Main {...props} />} />
          </Switch>
        </Grid>
      </Container >
    );
  }
}

export default App;
