import api from '../../../api';

const NAMESPACE = '/account';

export const actions = {
  signUp: (vue, data) => api().post('signup', data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    }),
  getSessionUser: ({ commit }) => {
    api().get(`${NAMESPACE}/user`).then((response) => {
      const res = response.data;
      if (res.status === 200) {
        commit('SET_USER', res.data);
      } else {
        console.error('Request error!', res.error);
      }
    }).catch((response) => {
      console.error('Request error!', response.statusText);
    });
  },
  setToken: ({ commit }, token) => {
    commit('SET_TOKEN', token);
  },
};

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user;
  },
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
};
