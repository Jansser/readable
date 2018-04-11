import React, { Component } from 'react';
import { Grid, Message } from 'semantic-ui-react';

class NotFound extends Component { 
  render() {
    return (
      <Grid.Row centered>
        <Grid.Column width={10}>
          <Message>
            <Message.Header>
              Ooops!
            </Message.Header>
            <p>
              We can't find the page.
            </p>
          </Message>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default NotFound;