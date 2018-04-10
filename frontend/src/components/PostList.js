import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts, fetchPostsByCategory, setOrderPosts } from '../actions/posts';
import Post from './Post';
import sortBy from 'sort-by';
import { Message, Dropdown, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { capitalize } from '../utils/helpers';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    orderBy: PropTypes.string.isRequired,
    getPosts: PropTypes.func,
    setOrderPosts: PropTypes.func,
  };

  componentDidMount() {
    const { getPosts, getPostsByCategory, category } = this.props;

    if (category) {
      getPostsByCategory(category);
    } else {
      getPosts();
    }
  }

  handleSortChange = (event, data) => {
    this.props.setOrderPosts(data.value);
  }

  render() {
    const { posts, orderBy, category } = this.props;

    const sortOptions = [
      {
        text: 'Popular',
        value: '-voteScore'
      },
      {
        text: 'Recent',
        value: '-timestamp'
      }
    ];

    if (posts.length === 0) {
      return (
      <Message warning>
        <p>There are no posts for <strong>{capitalize(category) || 'All'}</strong>.</p>
      </Message>
      )
    }

    if (posts) {
      posts.sort(sortBy(orderBy));
    }

    return (
      <div>
        <Menu compact>
          <Dropdown text='SortBy' options={sortOptions} defaultValue={orderBy} onChange={this.handleSortChange} simple item />
        </Menu>
        <Link to='/post/new'>
          <Button floated='right' positive>Create Post</Button>
        </Link>

        {posts.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    orderBy: state.posts.orderBy
  };
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  getPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
  setOrderPosts: (orderBy) => dispatch(setOrderPosts(orderBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);