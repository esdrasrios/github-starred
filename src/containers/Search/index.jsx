import { connect } from 'react-redux';
import { searchBy } from '../../actions/index';
import SearchInput from '../../components/Search';

const mapDispatchToProps = dispatch => ({

  searchBy: (n) => {
    dispatch(searchBy(n));
  },
});

export default connect(null, mapDispatchToProps)(SearchInput);
