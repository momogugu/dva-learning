import React, {Component, PropTypes} from 'react';
import { connect } from 'dva';

import styles from './Users.css';

import MainContainer from '../MainContainer';

// 用户筛选搜索框
import UserList from '../../components/Users/UserList';
// 用户信息展示列表
import UserSearch from '../../components/Users/UserSearch';
// 添加用户 & 修改用户弹出的浮框
import UserModal from '../../components/Users/UserModal';

function Users({location, dispatch, app}) {
  const {
    loading, list, total, current, currentItem, modalVisible, modalType
  } = app.users;

  const userSearchProps = {};
  const userListProps = {
    total,
    current,
    loading,
    dataSource: list
  };
  const userModalProps = {};
  return (
    <MainContainer location={location}>
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModal {...userModalProps} />
    </MainContainer>
  );
}

Users.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  app: PropTypes.object
}

// 指定订阅数据，关联了users
function mapStateToProps(app) {
  return {app};
}

// 建立数据关联关系
export default connect(mapStateToProps)(Users);
