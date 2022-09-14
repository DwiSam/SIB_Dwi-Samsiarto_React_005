import React from "react";

class Class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App-Clock">
        <h1>Realtime CLOCK</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Class;