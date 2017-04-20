import React from 'react';
import {PropTypes} from 'react';
import {Table, message, Popconfirm} from 'antd';

const UserList = ({
  total,
  current,
  loading,
  dataSource
}) => {
  const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="#">{text}</a>
  }, {
    title: '邮箱',
    dataIndex: 'email',
    key: 'email'
  }, {
    title: '住址',
    dataIndex: 'address.street',
    key: 'address'
  }, {
    title: '个人网站',
    dataIndex: 'website',
    key: 'website'
  }, {
    title: '操作',
    key: 'operation',
    render: (text, record) => (
      <p>
        <a onClick={() => {}}>编辑</a>
        &nbsp;
        <Popconfirm title="确定要删除吗？" onConfirm={() => {}}>
          <a>删除</a>
        </Popconfirm>
      </p>
    )
  }];
  const pagination= {
    total,
    current,
    pageSize: 10,
    onChange: () => {}
  };

  return (
    <div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record => record.id}
        pagination={pagination}
      />
    </div>
  )
}
export default UserList;
