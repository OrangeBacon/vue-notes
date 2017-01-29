import Vue from 'vue';
import * as Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [],
    activeNote: {
      text: 'New note',
      favorite: false,
    },
  },
  mutations: {
    ADD_NOTE(state) {
      const newNote = {
        text: 'New note',
        favorite: false,
      };
      state.notes.push(newNote);
      state.activeNote = newNote;
    },
    EDIT_NOTE(state, text) {
      state.activeNote.text = text;
    },
    DELETE_NOTE(state) {
      const index = state.notes.indexOf(state.activeNote);
      state.notes.splice(index, 1);
      state.activeNote = state.notes[0];
    },
    TOGGLE_FAVORITE(state) {
      state.activeNote.favorite = !state.activeNote.favorite;
    },
    SET_ACTIVE_NOTE(state, note) {
      state.activeNote = note;
    },
  },
  plugins: [createPersistedState()],
});

/*
Vue.use(Vuex);

// initial state
const initState = {
  notes: [],
  activeNote: {},
};

// mutators
const mutators = {
  ADD_NOTE(state) {
    const newNote = {
      text: 'New note',
      favorite: false,
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },
  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote);
  },
  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },
  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  },
};

// create vuex and export
export default new Vuex.Store({
  initState,
  mutators,
});
*/
