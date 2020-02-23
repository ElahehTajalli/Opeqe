
import { connect } from 'react-redux'
import Main from '../components/Main'

const mapDispatchToProps = (dispatch) => ({
  dispatch: dispatch
})

export default connect(mapDispatchToProps)(Main)
