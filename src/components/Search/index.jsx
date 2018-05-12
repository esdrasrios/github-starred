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
    console.log(this.props);
  }

  handleChange = async (e) => {
    await this.setState({ searchTerm: e.target.value });
    this.props.fetchUser(this.state.searchTerm);
  }

  render() {
    return (
      <input
        className="searchBox__input"
        type="text"
        value={this.state.searchTerm}
        onChange={this.handleChange}
        placeholder="Type something here..."
      />
    );
  }
}

export default SearchInput;
