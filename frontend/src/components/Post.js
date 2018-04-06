import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Label, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { formatTimeStamp } from '../utils/helpers';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;

    return (
      <Segment piled>
        <header className='post-header'>
          <Link to={`/post/${post.id}`}>
            <Label color='green' ribbon>{post.title}</Label>
          </Link>

          <ul className='clear'>
            <li>{formatTimeStamp(post.timestamp)}</li>
            <li>By {post.author}</li>
          </ul>
        </header>
        
        <div className='post-body'>
          <p>{post.body}</p>
        </div>
        
        <p>{post.commentCount} comments</p>
        <Label circular color='grey'>{post.voteScore}</Label>
      </Segment>
    )
  }
}

export default Post;