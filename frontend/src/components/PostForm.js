import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import { Button, Form, Icon } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { InputField, TextAreaField, SelectField } from 'react-semantic-redux-form';
import { fetchCategories } from '../actions/categories';
import { createPost } from '../actions/posts';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class PostForm extends Component {
  componentDidMount() {
    const { getCategories } = this.props;
    getCategories();
  }

  submit = values => {
    const { createPost, history } = this.props;

    createPost(values, () => {
      history.push('/');
    });
  }

  render() {
    const { categories, handleSubmit } = this.props;
    const options = categories.map( category => {
      return { key: category.name, value: category.name, text: category.name };
    });
    
    return (
      <Grid.Row centered>
        <Grid.Column width={12}>
          <Form onSubmit={handleSubmit(this.submit)}>
            <Form.Field>
              <Field name='title' component={InputField} label='Title' placeholder='Title' />
            </Form.Field>
            <Form.Group widths='equal'>
              <Field name='category' component={SelectField} label='Category' placeholder='Category' options={options} />
              <Field name='author' component={InputField} label='Author' placeholder='Author' />
            </Form.Group>
            <Form.Field>
              <Field name='body' component={TextAreaField} label='Content' placeholder='Talk to us...' />
            </Form.Field>

            <Button positive type='submit' icon labelPosition='left'>
              <Icon name='edit' />
              Create
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

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  createPost: (values, callback) => dispatch(createPost(values, callback))
});

PostForm = reduxForm({
  form: 'postForm'
})(
  connect(mapStateToProps, mapDispatchToProps)(PostForm)
);

export default PostForm;