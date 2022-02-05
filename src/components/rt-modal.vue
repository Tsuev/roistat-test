<template>
  <div v-if="isShowModal" @click.self="modalClose" class="rt-modal">
    <div class="rt-modal__container">
      <label class="rt-input">
        <span>Имя</span>
        <input :class="{ warning: emptyInp }" type="text" v-model="name" />
      </label>

      <label class="rt-input">
        <span>Телефон</span>
        <input :class="{ warning: emptyInp }" type="text" v-model="phone" />
      </label>

      <label class="rt-input">
        <span>Начальник</span>
        <select v-model="boss">
          <option v-for="(boss, index) of getBosses" :key="index">
            {{ boss }}
          </option>
          <option value="" selected>Нет</option>
        </select>
      </label>
      <div v-if="getMatch" class="d-flex justify-content-center my-2 text-danger">Имя не должно совпадать с имеющимися</div>
      <button @click.stop="addUser" class="btn btn-primary">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "rt-modal",
  props: {
    isShowModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: null,
      phone: null,
      boss: null,
      emptyInp: false,
    };
  },
  methods: {
    modalClose() {
      this.$emit("modalClose");
    },
    addUser() {
      this.changeMatch(this.name)      
        if (this.name && this.phone && !this.getMatch) {
          this.$store.commit("ADD_USER", {
            name: this.name,
            phone: this.phone,
            boss: this.boss,
          });
          this.modalClose();
          this.emptyInp = false;
        } else {
          this.emptyInp = true;
        }
    },
    changeMatch(name){
      this.$store.commit('CHANGE_MATCH', name)
    }
  },
  computed: {
    getBosses() {
      return this.$store.getters["GET_BOSSES"];
    },
    getMatch() {
      return this.$store.getters["GET_MATCH"];
    }
  },
};
</script>

<style lang="scss">
.rt-modal {
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.377);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &__container {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 30px;
    border-radius: 10px;
  }
}

.rt-input {
  margin-bottom: 10px;
  span {
    display: inline-block;
    min-width: 100px;
  }
  select {
    width: 189px;
  }
}

.warning {
  border: 2px solid red;
}
</style>