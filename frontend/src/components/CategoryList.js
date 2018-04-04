import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCategories } from '../actions/categories';
import { Menu } from 'semantic-ui-react';


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
        
        {categories.map(category => (
          <Menu.Item key={category.name}>{category.name}</Menu.Item>
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