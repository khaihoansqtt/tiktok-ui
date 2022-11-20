import { useState, useEffect, useReducer, useRef } from 'react'
import { setJob, addJob, deleteJob } from './constant'
import { initState, reducer } from './reducer'
import logger from './logger'

function Todo() {
    const [state, dispatch] = useReducer(logger(reducer), initState)
    const inputRef = useRef()
    console.log(state)

    const handleSubmit = () => {
        dispatch(addJob(state.job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div>
            <h3
                className='heading'
            >
                TO DO
            </h3>
            <input
                ref={inputRef}
                value={state.job}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button
                onClick={handleSubmit}
            >
                Add
            </button>
            <ul>
                {state.jobs.map((job, index) => (
                    <li key={index}>
                        {job}
                        <span onClick={() => dispatch((deleteJob(index)))}> &times;</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo;