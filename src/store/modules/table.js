export default {
  state: {
    tree: [],
    matchName: false
  },

  mutations: {
    ADD_USER(state, user) {
      if (user.boss) {
        (function addUser(tree){
          for (const key in tree) {
            if(tree[key].name == user.boss){
              tree[key].children.push({ id: Symbol(), name: user.name, phone: user.phone, children: []})                
            }else{
              addUser(tree[key].children)
            }
          }
        })(state.tree)
      } else {
        state.tree.push({ id: Symbol(), name: user.name, phone: user.phone, children: [] });
      }
      
      localStorage.setItem('tree', JSON.stringify(state.tree))
    },

    CHANGE_MATCH(state, name){
      (function addUser(tree){
        for (const key in tree) {
          if(tree[key].name == name && name){
            state.matchName = true;
          }else{
            state.matchName = false;
          }
        }
      })(state.tree)
    }
  },

  actions: {},

  getters: {
    GET_TREE(state) {
      return state.tree;
    },

    GET_BOSSES(state) {
      const arr = []
      return (function getBosses(tree) {
        for (const key in tree) {
          arr.push(tree[key].name)
          if(tree[key]?.children){
            getBosses(tree[key].children)
          }
        }
        return arr
      })(state.tree)
    },

    GET_MATCH(state){
      return state.matchName
    }
  },
};
