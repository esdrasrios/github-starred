import React, { Component } from 'react';
import { connect } from 'react-redux';

class MainContent extends Component {
  renderStarredRepos() {
    if (this.props.user !== undefined) {
      return this.props.user.map(n => <div key={n.id}> {n.name} | {n.owner.login}</div>);
    }
    return <div> Loading </div>;
  }

  render() {
    return (
      <div>
        {this.renderStarredRepos()}
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  user: state.user.results,
});

export default connect(mapStateToProps, null)(MainContent);
