import * as userService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    loading: false, // 控制加载状态
    current: null, // 当前分页信息
    currentItem: {}, // 当前操作的用户对象
    modalVisible: false, // 弹出框的显示状态
    modalType: 'create' // 弹出框的类型（添加用户，编辑用户）
  },
  // 切换路由时dispatch action
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/users') {
          dispatch({
            type: 'fetch',
            payload: query
          });
        }
      });
    }
  },
  effects: {
    *fetch ({payload: {page}}, {call, put}) {
      const {data, headers} = yield call(userService.fetch, {page});
      yield put({type: 'showLoading'});
      yield put({type: 'save', payload: {data, total: headers['x-total-count']}});
    },
    // *query({payload}, {select, call, put}) {
    //   yield put({type: showLoading});
    //   const {data} = yield call(query);
    //   if (data) {
    //     yield put({
    //       type: 'querySuccess',
    //       payload: {
    //         list: data.data,
    //         total: data.page.total,
    //         current: data.page.current
    //       }
    //     });
    //   }
    // },
    *create(){},
    *'delete'(){},
    *update(){}
  },
  reducers: {
    save(state, {payload: {data: list, total}}) {
      return {...state, list, total, loading: false};
    }, // 使用服务器数据返回
    showLoading(state, action) {
      return {...state, loading: true};
    }, // 控制加载状态的reducer
    // showModal() {}, // 控制modal显示状态的reducer
    // hideModal() {},
    // querySuccess(state){
    //   const mock = {
    //     total: 3,
    //     current: 1,
    //     loading: false,
    //     list: [
    //       {
    //         id: 1,
    //         name: '张三',
    //         age: 23,
    //         address: '成都',
    //       },
    //       {
    //         id: 2,
    //         name: '李四',
    //         age: 24,
    //         address: '杭州',
    //       },
    //       {
    //         id: 3,
    //         name: '王五',
    //         age: 25,
    //         address: '上海',
    //       },
    //     ],
    //   };
    //   return {...state, ...mock, loading: false}
    // }, // 使用服务器数据返回
    // createSuccess() {},
    // deleteSuccess() {},
    // updateSuccess() {}
  }
};
