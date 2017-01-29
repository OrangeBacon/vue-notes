<template>
  <div id="note-editor">
    <textarea
     :value="text"
     @input="edit"
     class="form-control">
    </textarea>
  </div>
</template>

<script>
  // import { editNote } from 'store/actions';

  export default {
    data() {
      return {
        activeNote: {},
      };
    },
    computed: {
      text() {
        return this.$store.state.activeNote.text;
      },
    },
    methods: {
      edit(e) {
        this.$store.commit('EDIT_NOTE', e.target.value);
      },
    },
  };
</script>

<style lang='scss'>
  #note-editor {
    flex: 2 1 auto;
    align-self:stretch;
  }
  .form-control {
    resize:none;
    height:100%;
    width:100%;
    border:0;
    padding: 15px;
    background-color:darken(#939473,10%);
    box-sizing:border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: all .5s;
    &:focus {
      outline:none;
      background-color:#939473;
    }
  }
</style>