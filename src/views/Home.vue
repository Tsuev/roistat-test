<template>
  <div class="home">
    <button @click="changeModalShow" class="btn btn-primary m-2">
      Добавить
    </button>

    <rt-table :key="rerenderComponent"/>

    <rt-modal @modalClose="changeModalShow" :isShowModal="isShowModal" />
  </div>
</template>

<script>
import RtModal from "../components/rt-modal.vue";
import RtTable from "../components/rt-table.vue";

export default {
  components: { RtTable, RtModal },
  name: "home",
  data(){
    return {
      rerenderComponent: 0
    }
  },
  methods: {
    changeModalShow() {
      this.$store.commit("CHANGE_MODAL_SHOW");
      this.rerenderComponent++
    },
  },
  computed: {
    isShowModal() {
      return this.$store.getters["GET_MODAL_VISIBLE_STATE"];
    },
  },
};
</script>

