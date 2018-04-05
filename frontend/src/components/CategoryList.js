import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCategories } from '../actions/categories';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class CategoryList extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    getCategories: PropTypes.func
  };

  componentDidMount () {
    this.props.getCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Categories</Menu.Header>
        </Menu.Item>
        
        <Menu.Item>
          <Link to='/'>All</Link>
        </Menu.Item>
        
        {categories.map(category => (
          <Menu.Item key={category.name}>
            <Link to={`/${category.path}`}> {category.name} </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories())
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);