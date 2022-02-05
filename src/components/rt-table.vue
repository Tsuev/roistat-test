<template>
  <div class="rt-table">

    <ul class="rt-table__body">
      <div class="rt-table__body__item__container">
        <div class="rt-table__body__item__container__name">Имя</div>
        <div class="rt-table__body__item__container__number">Телефон</div>
      </div>

      <rt-tree v-for="tree in tree" :key="tree.id" :tree="tree" />
    </ul>
  </div>
</template>

<script>
import RtTree from "../components/rt-tree.vue";
export default {
  name: "rt-table",
  components: { RtTree },
  computed: {
    tree() {
      return JSON.parse(localStorage.getItem('tree'));
    },
  },
};
</script>

<style lang="scss">
.rt-table {
  &__body {
    list-style: none;
    &__item {
      &__container {
        display: flex;
        &__name,
        &__number {
          border: solid 1px black;
          min-width: 150px;
          padding: 5px;
        }
      }
    }
  }
}
</style>