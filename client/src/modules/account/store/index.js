import {
  ADD_MESSAGE, ADD_NOTIFICATION, SET_USER, SEARCH,
} from './types';

import * as getters from './getters';
import * as actions from './actions';

const defaultState = {
  user: null,
  notifications: [
    {
      id: 1, text: 'Something happened!', time: 1, user: null,
    },
  ],
  messages: [],
  searchText: '',
};

const mutations = {
  [ADD_MESSAGE](state, item) {
    state.messages.splice(0);
    state.messages.push(item);
  },

  [ADD_NOTIFICATION](state, item) {
    state.notifications.splice(0);
    state.notifications.push(item);
  },

  [SET_USER](state, user) {
    state.user = user;
  },

  [SEARCH](state, text) {
    state.searchText = text;
  },

};

export default {
  namespaced: true,
  state: defaultState,
  getters,
  actions,
  mutations,
};
