import React, {Component, PropTypes} from 'react';
import {Layout} from 'antd';
import { connect } from 'dva';

import Menus from '../components/Menus/Menus.jsx';

const {Header, Content, Footer, Sider} = Layout;

function MainContainer({children, location, dispatch, app}) {
  const {navOpenKeys} = app.nav;
  const menuProps = {
    location,
    navOpenKeys,
    changeOpenKeys(openKeys) {
      localStorage.setItem(`navOpenKeys`, JSON.stringify(openKeys));
      dispatch({type: 'nav/handleNavOpenKeys', payload: {navOpenKeys: openKeys}})
    }
  }
  return (
    <Layout>
      <Sider style={{overflow: 'auto', background: '#fff'}}>
        <Menus {...menuProps}/>
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

MainContainer.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object
};

// 指定订阅数据，关联了users
function mapStateToProps(app) {
  return {app};
}

// 建立数据关联关系
export default connect(mapStateToProps)(MainContainer);
