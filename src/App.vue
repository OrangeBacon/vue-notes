<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from 'components/Toolbar';
  import NotesList from 'components/NotesList';
  import Editor from 'components/Editor';

  export default {
    name: 'app',
    components: {
      Toolbar,
      NotesList,
      Editor,
    },
  };
</script>

<style>
  html, body, #app {
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: hidden;
  }
  #app {
    display: flex;
    align-content: stretch;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
