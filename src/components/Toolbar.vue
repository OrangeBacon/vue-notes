<template>
  <div id="toolbar">
    <i @click="add">add</i>
    <i @click="toggle"
      :class="{starred: isstarred}">favorite</i>
    <i @click="del">delete</i>
  </div>
</template>

<script>
  export default {
    computed: {
      isstarred() {
        return this.$store.state.activeNote.favorite;
      },
    },
    methods: {
      add() {
        this.$store.commit('ADD_NOTE');
      },
      toggle() {
        this.$store.commit('TOGGLE_FAVORITE');
      },
      del() {
        this.$store.commit('DELETE_NOTE');
      },
    },
  };
</script>

<style lang='scss'>
  #toolbar {
    flex: 0 1 80px;
    align-self:stretch;
    background-color: #13444D;
    color: #252326;
    padding-top: 35px;
    text-align:center;
  }
  i {
    padding: 5px;
    display: block;
    font-weight:bold;
    transition: all .5s;
    &:hover {
      background-color:lighten(#13444D,10%);
    }
    &.starred {
      color: #d99f32;
    }
  }
</style>