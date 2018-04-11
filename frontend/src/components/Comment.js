import React, { Component } from 'react';
import * as Semantic from 'semantic-ui-react'
import { formatTimeStamp, capitalize } from '../utils/helpers';
import { deleteComment, selectComment } from '../actions/comments';
import { connect } from 'react-redux';

class Comment extends Component {
  handleEdit = () => {
    const { comment, selectComment } = this.props;

    selectComment(comment);
  }

  state = {
    modalDeleteOpen: false
  }

  handleDeleteConfirm = () => {
    const { deleteComment, comment } = this.props;

    deleteComment(comment.id, () => {
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
    const { comment } = this.props;
    const { modalDeleteOpen } = this.state;

    return (
      <Semantic.Comment.Group>
        <Semantic.Comment>
          <Semantic.Comment.Content>
            <Semantic.Comment.Author as='span'>{capitalize(comment.author)}</Semantic.Comment.Author>
            
            <Semantic.Comment.Metadata as='span'>
              {formatTimeStamp(comment.timeStamp)}
            </Semantic.Comment.Metadata>

            <Semantic.Comment.Text>{comment.body}</Semantic.Comment.Text>

            <Semantic.Comment.Actions>
              <Semantic.Comment.Action onClick={this.handleEdit}><Semantic.Icon name='edit'/> Edit</Semantic.Comment.Action>
              <Semantic.Comment.Action onClick={this.showDeleteConfirm}><Semantic.Icon name='cancel' /> 
                Delete
                <Semantic.Confirm
                  open={modalDeleteOpen}
                  onCancel={this.handleDeleteCancel}
                  onConfirm={this.handleDeleteConfirm}
                />
              </Semantic.Comment.Action>
            </Semantic.Comment.Actions>
          </Semantic.Comment.Content>
        </Semantic.Comment>
      </Semantic.Comment.Group>
    )
  }
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  deleteComment: (id, callback) => dispatch(deleteComment(id, callback)),
  selectComment: (comment) => dispatch(selectComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
