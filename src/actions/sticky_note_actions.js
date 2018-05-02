import * as localStorageUtil from '../utils/notes_utils'

export const RECEIVE_NOTES = "RECEIVE_NOTES";

const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

const overwriteNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const fetchNotes = screen_name => dispatch => {
  let notes = localStorageUtil.fetchNotes()
  (notes => dispatch(receiveNotes(notes)))(notes) 
}