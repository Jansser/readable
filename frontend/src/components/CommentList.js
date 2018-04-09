import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import Comment from './Comment';
import { Segment, Header } from 'semantic-ui-react';
import sortBy from 'sort-by';

class CommentList extends Component {
  componentDidMount() {
    const { getComments, postId } = this.props;

    getComments(postId);
  }  

  render() {
    const { comments } = this.props;
      
    if(comments) {
      comments.sort(sortBy('-voteScore'));
    }

    return (
      <Segment>
        {comments && 
          <Header as='h3' dividing>Comments</Header>
        }
        
        {comments && 
          comments.map( comment => <Comment key={comment.id} comment={comment} />) 
        }
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
}

const mapDispatchToProps = dispatch => ({
  getComments: (postId) => dispatch(fetchComments(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);