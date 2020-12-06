/** This source code is forked from https://github.com/facebook/create-react-app **/

import React, { Component } from 'react';

import PropTypes from 'prop-types';
import load from 'absoluteLoad';

export default class extends Component {
  static propTypes = {
    onReady: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load();
    this.setState({ users });
  }

  componentDidUpdate() {
    this.props.onReady();
  }

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
