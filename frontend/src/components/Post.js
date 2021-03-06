import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Segment, Button, Icon, Confirm } from 'semantic-ui-react';
import { formatTimeStamp } from '../utils/helpers';
import { deletePost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Vote from './Vote';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  state = {
    modalDeleteOpen: false
  }

  handleDeleteConfirm = () => {
    const { deletePost, post } = this.props;

    deletePost(post.id, () => {
      this.handleDeleteCancel();
    });
  }

  handleDeleteCancel = () => {
    this.setState(() => ({
      modalDeleteOpen: false
    }));
  }

  showDeleteConfirm = () => {
    this.setState(() => ({
      modalDeleteOpen: true
    }));
  }

  render() {
    const { post, comments } = this.props;
    const { modalDeleteOpen } = this.state;

    return (
      <Segment piled>
        <header className='post-header'>
          <Link to={`/post/${post.id}`}>
            <Label color='red' ribbon>{post.title}</Label>
          </Link>
          
          <ul className='clear'>
            <li>{formatTimeStamp(post.timestamp)}</li>
            <li>By {post.author}</li>
          </ul>
        </header>

        <div className='post-body'>
          <Vote item={post} type='post'/>
          <p>{post.body}</p>
        </div>

        <div>
          <Link to={`/post/edit/${post.id}`}>
            <Button icon labelPosition='left' size='small' color='black'>
              <Icon name='edit' />
              Edit
            </Button>
          </Link>
          
          <Button icon labelPosition='left' size='small' onClick={this.showDeleteConfirm} color='black'>
            <Icon name='trash' />
            Delete
            <Confirm
              open={modalDeleteOpen}
              onCancel={this.handleDeleteCancel}
              onConfirm={this.handleDeleteConfirm}
            />
          </Button>

          <span className='post-comments'>
            <Icon name='comments' /> {comments.length} comments
          </span>
        </div>
      </Segment>
    )
  }
}

const mapStateToProps = state =>(state) => {
  return {
    comments: state.comments.comments,
  };
}
const mapDispatchToProps = dispatch => ({
  deletePost: (id, callback) => dispatch(deletePost(id, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);;