import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../actions/comments';
import Comment from './Comment';
import { Segment, Header } from 'semantic-ui-react';
import sortBy from 'sort-by';
import CommentForm from './CommentForm';

class CommentList extends Component {
  componentDidMount() {
    const { getComments, postId } = this.props;

    getComments(postId);
  }  

  render() {
    const { comments, postId, orderBy } = this.props;
    
    if(comments) {
      comments.sort(sortBy(orderBy));
    }

    return (
      <Segment>
        {comments && 
          <Header as='h3' dividing>Comments</Header>
        }
        
        {comments && 
          comments.map( comment => <Comment key={comment.id} comment={comment} />) 
        }
        <CommentForm postId={postId}/>
      </Segment>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments.comments,
    orderBy: state.comments.orderBy
  };
}

const mapDispatchToProps = dispatch => ({
  getComments: (postId) => dispatch(fetchComments(postId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);