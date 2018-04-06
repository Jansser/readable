import React, { Component } from 'react';
import {
  fetchPost
} from '../actions/posts';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Post from './Post';
import { Grid } from 'semantic-ui-react';

class PostDetail extends Component {
  static propTypes = {
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getPost(id);
  }

  render() {
    const { post } = this.props;

    console.log('Rendering', post);

    return (
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Post post={post} />
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const mapStateToProps = state => {
  return {
    post: state.posts.post
  };
}

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(fetchPost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);