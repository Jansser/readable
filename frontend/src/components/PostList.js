import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts, setOrderPosts } from '../actions/posts';
import Post from './Post';
import sortBy from 'sort-by';
import { Dropdown, Menu } from 'semantic-ui-react';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    orderBy: PropTypes.string.isRequired,
    getPosts: PropTypes.func,
    setOrderPosts: PropTypes.func
  };

  componentDidMount() {
    this.props.getPosts();
  }

  handleSortChange =(event, data) => {
    this.props.setOrderPosts(data.value);
  }

  render() {
    const { posts, orderBy } = this.props;

    const sortOptions = [
      {
        text: 'Vote Score',
        value: '-voteScore'
      },
      {
        text: 'Date',
        value: '-timestamp'
      }
    ];

    if (posts) {
      posts.sort(sortBy(orderBy));
    }

    return (
      <div>
        <h2>{posts.length} posts</h2>
        <Menu compact>
          <Dropdown text='SortBy' options={sortOptions} defaultValue={orderBy} onChange={this.handleSortChange} simple item />
        </Menu>

        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts,
    orderBy: state.posts.orderBy
  };
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts()),
  setOrderPosts: (orderBy) => dispatch(setOrderPosts(orderBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);