export default {
  namespace: 'nav',
  state: {
    navOpenKeys: JSON.parse(localStorage.getItem(`navOpenKeys`)) || []
  },
  subscriptions: {

  },
  effexts: {},
  reducers: {
    handleNavOpenKeys(state, {payload: navOpenKeys}) {
      return {...state, ...navOpenKeys};
    }
  }
}
