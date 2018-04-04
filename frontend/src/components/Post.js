import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Segment } from 'semantic-ui-react';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;

    return (<Segment >
      <Label as='a' color='green' ribbon>{post.title}</Label>
      <div>
        <span>{post.voteScore}</span>
        <p>{post.body}</p>
        <p>{post.timestamp}</p>
      </div>
    </Segment>)
  }
}

export default Post;