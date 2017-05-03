import React, {Component, PropTypes} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'dva/router';

const SubMenu = Menu.SubMenu;

function Menus({location, navOpenKeys, changeOpenKeys}) {
  const levelMap = {};
  const menuProps = {
    openKeys: navOpenKeys,
    onOpenChange
  }

  // 保持选中
  function getAncestorKeys(key) {
    const map = [];
    const getParent = (index)=>{
      const result = [String(levelMap[index])];
      if (levelMap[result[0]]) {
        result.unshift(getParent(result[0])[0]);
      }
      return result;
    }
    for(let index in levelMap) {
      if ({}.hasOwnProperty.call(levelMap, index)) {
        map[index] = getParent(index);
      }
    }
    return map[key] || [];
  }

  function onOpenChange(openKeys) {
    const latestOpenKey = openKeys.find(key => !(navOpenKeys.indexOf(key)>-1));
    const latestCloseKey = navOpenKeys.find(key => !(openKeys.indexOf(key)>-1));
    let nextOpenKeys = [];
    if (latestOpenKey) {
      nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
    }
    if (latestCloseKey) {
      nextOpenKeys = getAncestorKeys(latestCloseKey)
    }
    changeOpenKeys(nextOpenKeys);
  }

  return (
    <Menu mode="inline" {...menuProps} selectedKeys={[location.pathname]}>
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <SubMenu key="1" title={<span><Icon type="team" />User</span>}>
        <Menu.Item key="/users">
          <Link to="/users">UserList</Link>
        </Menu.Item>
        <Menu.Item key="/a">
          <Link to="/a">A菜单</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="2" title={<span><Icon type="setting" />Other</span>}>
        <Menu.Item key="/b">
          <Link to="/b">B菜单</Link>
        </Menu.Item>
        <Menu.Item key="/c">
          <Link to="/c">C菜单</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
}

Menus.propTypes = {
  navOpenKeys: PropTypes.array,
  changeOpenKeys: PropTypes.func
}

export default Menus;
