import React, { Component } from 'react';
import _ from 'lodash';
import './index.css';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  componentDidMount = () => {
    this.props.fetchUser('rodrigorm');
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick = () => {
    this.props.fetchUser(this.state.searchTerm);
  }

  sortResults = (type) => {
    this.props.sortBy(type.target.value);
  }

  filterResults = (language) => {
    this.props.filterBy(language.target.value);
  }

  renderSelect = () => {
    let langs = [];
    if (this.props.languages !== undefined) {
      this.props.languages.map(l => langs.push(l.language));
    }
    langs = _.uniq(langs);
    return langs.map(l => (<option onClick={this.filterResults} value={l} key={l}> {l} </option>));
  }
  render() {
    return (
      <div className="container__sideMenu">
      GitHub Starred
        <input
          className="searchBox__input"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search a new user..."
        />
        <button onClick={this.handleClick}> Search </button>
        <div>
          <h2> Sort By</h2>
          <select onChange={this.filterResults}>{this.renderSelect()}</select>
          <button onClick={this.sortResults} value="name"> Name </button>
          <button onClick={this.sortResults} value="stargazers_count"> Stars </button>
          <button onClick={this.sortResults} value="open_issues"> Issues Open </button>
        </div>
      </div>
    );
  }
}

export default SideMenu;
