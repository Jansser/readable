import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { TextAreaField, InputField } from 'react-semantic-redux-form';
import { addComment, editComment } from '../actions/comments';
import { connect } from 'react-redux';

class CommentForm extends Component {
  submit = values => {
    const { addComment, editComment, postId, comment } = this.props;
    
    if(comment.id) {
      editComment(comment.id, values, () => {});
    } else {
      addComment(postId, values, () => {});
    }
  }

  render() {
    const { handleSubmit, comment } = this.props;
    
    let labelButton = comment.id ? 'Edit' : 'Add Commment';
    let disabled = comment.id ? true : false;

    return (
      <Form reply onSubmit={handleSubmit(this.submit)}>
        <Divider />

        <Field name='author' component={InputField} label='Author' placeholder='Author' disabled={disabled}/>
        <Field name='body' component={TextAreaField} label='Comment'/>

        <Button content={labelButton} labelPosition='left' icon='edit' positive/>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: state.comments.comment,
    comment: state.comments.comment
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (postId, values, callback) => { dispatch(addComment(postId, values, callback)) },
  editComment: (id, values, callback) => { dispatch(editComment(id, values, callback)) }
});

CommentForm = reduxForm({
  form: 'commentForm',
  enableReinitialize: true
})(CommentForm);

CommentForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default CommentForm;