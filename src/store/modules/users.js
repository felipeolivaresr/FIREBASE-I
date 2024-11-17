const state = {
    users: [] 
  };
  
  const mutations = {
    ADD_USER(state, user) {
      state.users.push(user); 
    },

    REMOVE_USER(state, userId) {
      state.users = state.users.filter(user => user.id !== userId);
    }
  };
  
  const actions = {
    addUser({ commit }, user) {
      commit("ADD_USER", user); 
    },

    deleteUser({ commit }, userId) {
      commit("REMOVE_USER", userId); 
    }
  };
  
  const getters = {
    users: state => state.users 
  };
  
  export default {
    state,
    mutations,
    actions,
    getters
  };
  