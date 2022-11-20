

export const SET_JOB = 'SET_JOB'
export const ADD_JOB = 'ADD_JOB'
export const DELETE_JOB = 'DELETE_JOB'

export const setJob = (payload) => {
    return {
        type: SET_JOB,
        payload,
    }
}
export const addJob = (payload) => {
    return {
        type: ADD_JOB,
        payload,
    }
}
export const deleteJob = (payload) => {
    return {
        type: DELETE_JOB,
        payload,
    }
}