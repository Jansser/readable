import React, { Component } from 'react';
import {
  fetchPost
} from '../actions/posts';
import { connect } from 'react-redux';
import Post from './Post';
import { Grid } from 'semantic-ui-react';
import CommentList from './CommentList';

class PostDetail extends Component {
  static propTypes = {
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.getPost(id);
  }

  render() {
    const { post } = this.props;

    return (
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Post post={post} />
          { post.id &&
            <CommentList postId={post.id}/>
          }
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