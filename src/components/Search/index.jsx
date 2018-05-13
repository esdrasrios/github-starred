import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }
  handleChange = async (e) => {
    await this.setState({ searchTerm: e.target.value });
    this.props.searchBy(this.state.searchTerm);
  }
  handleClick = () => {
    this.props.searchBy(this.state.searchTerm);
  }
  render() {
    return (
      <div>
        <input
          className="searchBox__input"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search a repo here..."
        />
      </div>
    );
  }
}

export default SearchInput;
