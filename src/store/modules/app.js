const state = {
  collapsed: false
}

const actions = {
  // setCollapse(context){
  //   context.commit.xxx
  //   context.state.xxx
  //   context.getters.xxx
  // },
  setCollapse({commit},{type}){
    commit(type)
  }
}

const mutations = {
  ['TOGGLE_COLLAPSE'](state) {
    state.collapsed = !state.collapsed
  }
}

const getters = {
  // collapsed: (state) => { return state.collapsed }
  // collapsed: state => state.collapsed
  collapsed: ({collapsed}) => collapsed
  // collapsed: false
}

export default {
  state,
  actions,
  mutations,
  getters,
  namespaced: true, // 命名空间，避免不同模块间的命名冲突
}