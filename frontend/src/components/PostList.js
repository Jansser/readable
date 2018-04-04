import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions/posts';
import Post from './Post';
import sortBy from 'sort-by';

class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func
  };

  componentDidMount () {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props;

    if(posts) {
      posts.sort(sortBy('-voteScore'));
    }
    
    return (
      <div>
        <h2>{posts.length} posts</h2>

        {posts.map( post => (
          <Post key={post.id} post={post}/>          
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
}

const mapDispatchToProps = dispatch => ({
  getPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);