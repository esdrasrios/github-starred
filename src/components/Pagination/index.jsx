import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
  goToPage = (p) => {
    this.props.goToPage(p.target.value);
  }

  nextPage = () => {
    this.props.nextPage();
  }

  previousPage = () => {
    this.props.previousPage();
  }

  renderPageList = () =>
    _.range(1, this.props.totalPages + 1).map(p => (
      <li onClick={this.goToPage} value={p} key={p}>
        {p}
      </li>
    ));

  render() {
    return (
      <div>
        <button onClick={this.previousPage}> Previous Page </button>
        <ul> {this.renderPageList()} </ul>
        <button onClick={this.nextPage}> Next Page </button>
      </div>
    );
  }
}

export default Pagination;
