import { RECEIVE_NOTES } from "../actions/sticky_note_actions"
import { merge } from "lodash"

const StickyNoteReducer = (state = {}, action) => {
  Object.freeze(state)

  switch (action.type) {
    case RECEIVE_NOTES:
      const newNotes = {}
      action.notes.forEach(note => newNotes[note.id] = note)
      return merge({}, state, newNotes);
      default:
        return state;
  }
}

export default StickyNoteReducer;