import React, { Component } from 'react';
import { connect } from "react-redux";
import { Icon } from 'semantic-ui-react';
import { voteOnPost } from '../actions/posts';
import { voteOnComment } from '../actions/comments';

class Vote extends Component {
  handleVote(option) {
    const { item, voteOnPost, voteOnComment, type } = this.props;

    if(type === 'post') {
      voteOnPost(item.id, option);
    } else {
      voteOnComment(item.id, option);
    }
  }

  render() {
    const { item } = this.props;

    return (
      <div className='vote'>
        <div className='vote-icon'>
          <Icon 
            onClick={()=> { this.handleVote('upVote') }}
            name="up arrow"/>
        </div>
        <div className='vote-score'>
          { item.voteScore }
        </div>
        <div className='vote-icon'>
          <Icon 
            onClick={()=> { this.handleVote('downVote') }}
            name="down arrow" />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  voteOnPost: (id, option) => dispatch(voteOnPost(id, option)),
  voteOnComment: (id, option) => dispatch(voteOnComment(id, option))
});

export default connect(state => state, mapDispatchToProps)(Vote);