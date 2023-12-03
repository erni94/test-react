import React, { useState, useEffect } from 'react'
import './style.css'

export default function Timer() {
  const [state, setState] = useState({
    isRunning: false,
    startTime: null,
    elapsedTime: 0,
  })

  useEffect(() => {
    let timerInterval = null
    if (state.isRunning) {
      timerInterval = setInterval(() => {
        setState((prevState) => ({ ...prevState, elapsedTime: new Date() - prevState.startTime }))
      }, 1000)
    } else if (!state.isRunning && timerInterval) {
      clearInterval(timerInterval)
    }
    return () => clearInterval(timerInterval)
  }, [state.isRunning, state.startTime])

  const startTimer = () => {
    setState((prevState) => ({
      ...prevState,
      isRunning: true,
      startTime: new Date() - prevState.elapsedTime,
    }))
  }

  const stopTimer = () => {
    setState((prevState) => ({ ...prevState, isRunning: false }))
  }

  let minutes = Math.floor(state.elapsedTime / 60000)
  let seconds = ((state.elapsedTime % 60000) / 1000).toFixed(0)
  return (
    <span className="description">
      {state.isRunning ? (
        <button className="icon icon-pause" onClick={stopTimer}></button>
      ) : (
        <button className="icon icon-play" onClick={startTimer}></button>
      )}
      {`  ${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}
    </span>
  )
}
