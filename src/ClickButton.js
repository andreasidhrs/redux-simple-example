import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ClickButton extends Component {
  static propTypes = {
    startClicks: PropTypes.number
  };

  static defaultProps = {
    startClicks: 0
  }

  state = {
    totalClicks: this.props.startClicks
  }

  clickHandler = () => {
    const totalClicks = (this.state.totalClicks + 1);
    this.setState({ totalClicks });
  }

  render() {
    const { totalClicks } = this.state;
    return (<button onClick={this.clickHandler}>count {totalClicks}</button>);
  }
}
