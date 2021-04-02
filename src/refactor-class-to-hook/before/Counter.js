import React from "react";

import "../../styles.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increaseCount = this.increaseCount.bind(this);
  }

  componentDidMount() {
    this.setState({ count: 30 });
  }

  increaseCount() {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  }

  render() {
    return (
      <button className="button" onClick={this.increaseCount}>
        {this.state.count}
      </button>
    );
  }
}

export { Counter };
