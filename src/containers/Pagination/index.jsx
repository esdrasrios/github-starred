import { connect } from 'react-redux';
import { nextPage, previousPage, goToPage } from '../../actions/index';
import Pagination from '../../components/Pagination';

const mapStateToProps = state => ({
  totalPages: state.user.totalPages,
});

const mapDispatchToProps = dispatch => ({
  goToPage: (p) => { dispatch(goToPage(p))},
  nextPage: () => dispatch(nextPage()),
  previousPage: () => dispatch(previousPage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
