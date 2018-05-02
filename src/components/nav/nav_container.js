import { connect } from 'react-redux'

import Nav from './nav'
import { fetchNotes, setNotes } from '../../actions/local_storage_actions'


const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  setNotes: notes => dispatch(setNotes(notes))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);