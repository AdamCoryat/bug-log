import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    activeBug: {},
    bugs: [],
    notes: [],
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    // Array Methods
    async getResource({ commit }, payload) {
      try {
        let res = await api.get(payload.path);
        commit("setResource", { data: res.data, resource: payload.resource });
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    async create({ dispatch }, payload) {
      try {
        await api.post(payload.path, payload.data);
        dispatch("getResource", {
          path: payload.getPath,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async edit({ dispatch }, payload) {
      try {
        await api.put(payload.path, payload.data);
        dispatch("getResource", {
          path: payload.getPath,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
    async deleteById({ dispatch }, payload) {
      try {
        dispatch("getResource", {
          path: payload.path,
          resource: payload.resource,
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
