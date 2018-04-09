import React, { Component } from 'react';
import * as Semantic from 'semantic-ui-react'
import { formatTimeStamp, capitalize } from '../utils/helpers';

class Comment extends Component {
  
  render() {
    const { comment } = this.props;

    return (
      <Semantic.Comment.Group>
        <Semantic.Comment>
          <Semantic.Comment.Content>
            <Semantic.Comment.Author as='span'>{capitalize(comment.author)}</Semantic.Comment.Author>
            
            <Semantic.Comment.Metadata as='span'>
              {formatTimeStamp(comment.timeStamp)}
            </Semantic.Comment.Metadata>

            <Semantic.Comment.Text>{comment.body}</Semantic.Comment.Text>
          </Semantic.Comment.Content>
        </Semantic.Comment>
      </Semantic.Comment.Group>
    )
  }
}

export default Comment;