<template>
    <li class="rt-table__body__item">
      <div class="rt-table__body__item__container">
        <div class="rt-table__body__item__container__name">{{ tree.name }}</div>
        <div class="rt-table__body__item__container__number">{{ tree.phone }}</div>
      </div>

      
      <ul v-if="tree.children && tree.children.length" class="rt-table__body yh">
        <rt-tree
          v-for="tree in tree.children"
          :key="tree.id"
          :tree="tree"
        />
      </ul>
    </li>

</template>

<script>
export default {
  name: "rt-tree",
  props: {
    tree: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

