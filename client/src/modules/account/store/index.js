// Account module index

import { actions, mutations } from './actions-mutations';

const defaultState = {
  token: null,
  user: null,
};

const getters = {
  token: state => state.token,
  user: state => state.user,
};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
