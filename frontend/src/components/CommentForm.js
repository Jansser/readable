import React, { Component } from 'react';
import { Form, Button, Divider } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { TextAreaField, InputField } from 'react-semantic-redux-form';
import { addComment } from '../actions/comments';
import { connect } from 'react-redux';

class CommentForm extends Component {
  submit = values => {
    const { addComment, postId } = this.props;
    
    addComment(postId, values, () => {
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Form reply onSubmit={handleSubmit(this.submit)}>
        <Divider />

        <Field name='author' component={InputField} label='Author' placeholder='Author'/>
        <Field name='body' component={TextAreaField} label='Comment'/>

        <Button content='Add Comment' labelPosition='left' icon='edit' positive/>
      </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    initialValues: {}
  };
}

const mapDispatchToProps = dispatch => ({
  addComment: (postId, values, callback) => { dispatch(addComment(postId, values, callback)) }
});

CommentForm = reduxForm({
  form: 'commentForm',
  enableReinitialize: true
})(CommentForm);

CommentForm = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export default CommentForm;