let defaultState = {'notes': null}

export const fetchNotes = () => {
  let notes = window.localStorage.getItem("notes");
  return notes === null || notes === "" ? defaultState : JSON.parse(notes);
}

export const setNotes = (notes) => {
  window.localStorage.setItem('notes', JSON.stringify(notes))
  return notes
}