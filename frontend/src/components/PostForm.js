import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SelectField } from 'react-semantic-redux-form';
import { fetchCategories } from '../actions/categories';
import { createPost, fetchPost, editPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { getCategories, getPost } = this.props;

    if(id) {
      getPost(id);
    }
    
    getCategories();
  }

  submit = values => {
    const { id } = this.props.match.params;
    const { createPost, editPost, history } = this.props;
    
    if(id) {
      editPost(id, values, () => {
        history.push(`/post/${id}`);
      });
    } else {
      createPost(values, () => {
        history.push('/');
      });  
    }
  }

  render() {
    const { id } = this.props.match.params;
    const { categories, handleSubmit } = this.props;
    const options = categories.map( category => {
      return { key: category.name, value: category.name, text: category.name };
    });
    
    return (
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Form onSubmit={handleSubmit(this.submit)}>
            <Form.Field>
              <Field name='title' component={InputField} label='Title' placeholder='Title' autoFocus/>
            </Form.Field>
            <Form.Group widths='equal'>
              <Field name='category' component={SelectField} label='Category' placeholder='Category' options={options} />
              <Field name='author' component={InputField} label='Author' placeholder='Author'/>
            </Form.Group>
            <Form.Field>
              <Field name='body' component={TextAreaField} label='Content' placeholder='Talk to us...' />
            </Form.Field>

            <Button color='black' type='submit' icon labelPosition='left'>
              <Icon name='edit' />
              { id ? 'Edit' : 'Create' }
            </Button>

            <Link to="/">
              <Button icon labelPosition='left'>
                <Icon name='cancel' />
                Cancel
              </Button>
            </Link>
          </Form>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories,
    initialValues: state.posts.post
  };
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPost: (id) => dispatch(fetchPost(id)),
  createPost: (values, callback) => dispatch(createPost(values, callback)),
  editPost: (id, values, callback) => dispatch(editPost(id, values, callback))
});

PostForm = reduxForm({
  form: 'postForm',
  enableReinitialize: true
})(PostForm)

PostForm = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export default PostForm;