import React, { Component } from 'react'
import './style.css'

export default class Timer extends Component {
  state = {
    isRunning: false,
    startTime: null,
    elapsedTime: 0,
  }

  startTimer = () => {
    this.setState({
      isRunning: true,
      startTime: new Date() - this.state.elapsedTime,
    })
    this.timerInterval = setInterval(() => {
      this.setState({ elapsedTime: new Date() - this.state.startTime })
    }, 1000)
  }

  stopTimer = () => {
    this.setState({ isRunning: false })
    clearInterval(this.timerInterval)
  }

  render() {
    let minutes = Math.floor(this.state.elapsedTime / 60000)
    let seconds = ((this.state.elapsedTime % 60000) / 1000).toFixed(0)
    return (
      <span className="description">
        {this.state.isRunning ? (
          <button className="icon icon-pause" onClick={this.stopTimer}></button>
        ) : (
          <button className="icon icon-play" onClick={this.startTimer}></button>
        )}
        &nbsp;
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </span>
    )
  }
}
