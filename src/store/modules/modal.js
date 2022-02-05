export default {
    state: {
      isShowModal: false,
    },
    mutations: {
      CHANGE_MODAL_SHOW(state){
        state.isShowModal = !state.isShowModal
      },
    },
    actions: {},
    getters: {
      GET_MODAL_VISIBLE_STATE(state){
        return state.isShowModal
      }
    },
};