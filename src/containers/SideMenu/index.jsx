import { connect } from 'react-redux';
import { sortBy, filterBy, fetchUser } from '../../actions/index';
import SideMenu from '../../components/SideMenu';

const mapStateToProps = state => ({
  languages: state.user.originalResults,
});

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => { dispatch(fetchUser(user)); },
  sortBy: (type) => { dispatch(sortBy(type)); },
  filterBy: (language) => { dispatch(filterBy(language)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
