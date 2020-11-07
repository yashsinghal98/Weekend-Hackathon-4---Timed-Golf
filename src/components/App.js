import React, { Component, useState } from "react";
import "../styles/App.css";
class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.start = false;
    this.state = { time: 0, x: 0, y: 0 };
    this.handleclick = this.handleclick.bind(this);
    this.loop = null;
    this.handlekey = (event) => {
      console.log(event.keyCode);
      if (this.start === false) return;
      if (event.keyCode === 39) {
        this.setState({ x: this.state.x + 5 });
      } else if (event.keyCode === 40) {
        this.setState({ y: this.state.y + 5 });
      }
    };
  }
  componentDidMount() {
    document.body.addEventListener("keydown", () => this.handlekey(event));
  }

  handleclick = () => {
    if (this.start === true) {
      this.start = false;
      clearInterval(this.loop);
      return;
    }
    this.start = true;
    this.loop = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  };
  componentWillUnmount() {}

  render() {
    if (this.state.x === 250 && this.state.y === 250) {
      clearInterval(this.loop);
      this.start = false;
    }
    return (
      <>
        <button className="start" onClick={this.handleclick}>
          Start
        </button>
        <div
          className="ball"
          style={{
            position: "absolute",
            top: `${this.state.y}px`,
            left: `${this.state.x}px`
          }}
        ></div>
        <div className="hole"></div>

        <div className="heading-timer">{this.state.time}</div>
      </>
    );
  }
}

export default Timer;
