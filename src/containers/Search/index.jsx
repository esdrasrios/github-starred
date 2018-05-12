import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';
import SearchInput from '../../components/Search';


const mapDispatchToProps = dispatch => ({

  fetchUser: (n) => {
    dispatch(fetchUser(n));
  },
});

export default connect(null, mapDispatchToProps)(SearchInput);
