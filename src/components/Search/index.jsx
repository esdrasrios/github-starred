import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }
  componentDidMount() {
    this.props.fetchUser('rodrigorm');
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  }

  handleClick = () => {
    this.props.fetchUser(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <input
          className="searchBox__input"
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Type something here..."
        />
        <button onClick={this.handleClick}> Search </button>
      </div>
    );
  }
}

export default SearchInput;
