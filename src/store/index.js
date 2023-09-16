import { createStore } from "vuex";
import axios from "axios";

const state = {
  games: [],
  isMenuVisible: false,
};

const mutations = {
  setGames(state, games) {
    state.games = games;
  },
  toggleVisibility(state) {
    state.isMenuVisible = !state.isMenuVisible;
  },
};

const actions = {
  async fetchGames({ commit }) {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      commit("setGames", response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
  toggleVisibility({ commit }) {
    commit("toggleVisibility");
  },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;
