import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = { 
    activeItem: 'readable' 
  };

  render() {
    return (
    <Menu color='red' inverted>
      <Menu.Item name='readable'>
        <Link to='/'>
          <Icon name='hand peace'/>
          Readable
        </Link>
      </Menu.Item>
      <Menu.Item name='home'>
        <Link to='/'>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item name='New Post'>
        <Link to='/post/new'>
          New Post
        </Link>
      </Menu.Item>
    </Menu>
  )
  }
}

export default Header;