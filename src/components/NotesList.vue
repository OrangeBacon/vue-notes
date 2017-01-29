<template>
  <div id="note-list">
    <div id="list-header">
      <h2>Vue notes</h2>
      <input
       @input='search'
       placeholder='Search'>
      <div role='group'>
        <button type='button'
         @click="show = 'all'"
         :class="{active: show=='all'}">All Notes</button>
        <button type="button" 
         @click="show = 'favorites'"
         :class="{active: show=='favorites'}">Favorites</button>
      </div>
    </div>
    
    <div class="container">
      <a v-for="note in filteredNotes"
       href="#"
       :class="{active: isactive(note)}"
       @click="setActive(note)">
        <h4>
          {{ title(note) }}
        </h4>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show: 'all',
        searchString: '',
      };
    },
    computed: {
      filteredNotes() {
        const state = this.$store.state;
        let notes = [];
        if (this.show === 'favorites') {
          notes = state.notes.filter(note => note.favorite);
        } else {
          notes = state.notes;
        }
        /* if (state.notes.length === 0 ||
           (this.show === 'favorites' && !state.activeNote.favorite)) {
          notes.push(state.activeNote);
        }*/
        notes = notes.filter(note => note.text.search(this.searchString) !== -1);
        return notes;
      },
    },
    methods: {
      title(note) {
        if (!note.text) {
          return '';
        }
        return note.text.trim().substring(0, 30).split('\n')[0];
      },
      setActive(note) {
        this.$store.commit('SET_ACTIVE_NOTE', note);
      },
      isactive(note) {
        return this.$store.state.activeNote === note;
      },
      search(e) {
        this.searchString = e.target.value || '';
      },
    },
  };
</script>

<style lang="scss">
  #note-list {
    max-width:300px;
    width: 300px;
    display:flex;
    flex-direction:column;
    background-color:#252326;
  }
  #list-header {
    padding:25px;
    input {
      margin-bottom:25px;
      width:100%;
      padding:5px;
      box-sizing:border-box;
      border-radius:5px;
      border:1px solid #1C343A; /*mid of background and parent*/
      color:#252326;
      background-color:#13444D;
      box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.75);
      transition: all .5s;
      font-weight:bold;
      &:focus {
        outline:none;
        box-shadow: none;
      }
      &::placeholder {
        color:#252326;
      }
    }
  }
  h2 {
    text-align:center;
    color:#13444D;
    margin:0;
    padding:25px;
  }
  .container {
    flex: 1 1 auto;
    padding:5px;
    white-space:nowrap;
  }
  div[role=group]{
    display:table;
    width:100%;
    border-collapse:collapse;
    button {
      margin:0;
      padding:5px;
      display:table-cell;
      width:50%;
      box-sizing:border-box;
      border:1px solid #1C343A; /*mid of background and parent*/
      color:#252326;
      background-color:#13444D;
      font-weight:bold;
      &.active {
        box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.75);
      }
      &:focus {
        outline:none;
        color:darken(#252326,10%);
      }
      &:hover {
        background-color:darken(#13444D,10%);
        color:lighten(#252326,10%);
      }
      &:first-child {
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
      }
      &:not(:first-child) {
        border-top-right-radius:5px;
        border-bottom-right-radius:5px;
      }
    }
  }
  a {
    display:block;
    background-color:#4F784E;
    margin:5px;
    text-decoration:none;
    overflow:hidden;
    color:#13444D;
    border-radius:5px;
    transition: all .5s;
    &:hover {
      background-color:darken(#4F784E,10%);
      color:lighten(#13444D,10%);
    }
    &.active {
      box-shadow: inset 0px 0px 25px 0px rgba(0,0,0,0.75);
      color:darken(#13444D,10%);
    }
    h4 {
      margin: 0;
      padding: 5px;
    }
  }
</style>