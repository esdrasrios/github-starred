import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions/index';

class User extends Component {
  fetchUserRepos(user) {
    this.props.fetchUser(user);
  }

  render() {
    return (
      <div>
        {this.fetchUserRepos()}
      </div>
    );
  }
}

export default connect(null, { fetchUser })(User);
