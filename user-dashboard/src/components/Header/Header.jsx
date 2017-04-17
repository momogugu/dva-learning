import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';

const Header = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />UserList</Link>
      </Menu.Item>
    </Menu>
  );
}

export default Header;
