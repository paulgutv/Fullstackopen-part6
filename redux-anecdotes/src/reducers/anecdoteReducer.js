import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      return state
        .map(anecdote =>
          anecdote.id !== action.payload.id ? anecdote : action.payload
          )
        .sort((a, b) => b.votes - a.votes)
    }
  }
})


export const { updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const handleLike = (id, anecdotes) => {
  return async dispatch => {
    const anecdoteToChange = anecdotes.find(a => a.id === id)
    const changedAnecdote = {
      content: anecdoteToChange.content,
      id: id,
      votes: anecdoteToChange.votes + 1
    }
    const modifiedAnecdote = await anecdoteService.update(id, changedAnecdote)
    dispatch(updateAnecdote(modifiedAnecdote))
  }
}

export default anecdoteSlice.reducer