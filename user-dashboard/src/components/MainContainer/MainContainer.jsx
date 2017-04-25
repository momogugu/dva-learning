import React from 'react';
import {Menu, Icon, Layout} from 'antd';
import {Link} from 'dva/router';

const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;

const MainContainer = ({children, location}) => {

  function onOpenChange(openKeys) {
    console.log(openKeys)
  }
  function getAncestorKeys(key) {
    const map = {
      sub3: ['sub2']
    };
    return map[key] || [];
  }
  return (
    <Layout>
      <Sider style={{overflow: 'auto'}}>
        <Menu mode="inline" theme="dark" onOpenChange={onOpenChange} selectedKeys={[location.pathname]}>
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
      </Sider>
      <Layout>
        <Header style={{background: '#fff', padding: 0}} />
        <Content>
          {children}
        </Content>
        <Footer style={{textAlign: 'center'}}>
          copyrigth ©2017 Created by Mogu
        </Footer>
      </Layout>
    </Layout>
  );
}

export default MainContainer;
