/** This source code is forked from https://github.com/facebook/create-react-app **/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

function load() {
  return [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' },
  ];
}

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
      <div id="feature-object-destructuring">
        {this.state.users.map(user => {
          const { id, ...rest } = user;
          // eslint-disable-next-line no-unused-vars
          const [{ name, ...innerRest }] = [{ ...rest }];
          return <div key={id}>{name}</div>;
        })}
      </div>
    );
  }
}
