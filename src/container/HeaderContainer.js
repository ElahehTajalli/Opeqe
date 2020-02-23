import Header from '../components/Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  header: state.header
})

export default connect(mapStateToProps)(Header)
