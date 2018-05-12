import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import SearchInput from '../../components/Search';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({

  fetchUser: (n) => {
    dispatch(fetchUser(n));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
