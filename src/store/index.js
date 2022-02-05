import Vue from "vue";
import Vuex from "vuex";

import table from "./modules/table"
import modal from "./modules/modal"

Vue.use(Vuex);

export default new Vuex.Store({
 modules: {
  table,
  modal
 }
});
