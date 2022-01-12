import { createStore } from "vuex";

import { Item } from "@/models/Item.model";
import { User } from "@/models/User.model";

export default createStore({
  state: {
    user: {} as User,
    items: [] as Item[],
    lastRequestTime: "",
  },
  mutations: {
    register(state, payload) {
      state.user = payload;
      state.items = [];
      state.lastRequestTime = "";
    },
    setItems(state, payload) {
      state.items = payload;
    },
    setLastRequestTime(state, payload) {
      state.lastRequestTime = payload;
    },
  },
  getters: {
    getItems: (state) => {
      return state.items;
    },
    getUser: (state) => {
      return state.user;
    },
    getLastRequestTime: (state) => {
      return state.lastRequestTime;
    },
  },
  actions: {
    register(context, payload) {
      context.commit("register", payload);
    },
    setItems(context, payload) {
      context.commit("setItems", payload);
    },
    setLastRequestTime(context, payload) {
      context.commit("setLastRequestTime", payload);
    },
  },
  modules: {},
});
