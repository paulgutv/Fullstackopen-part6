import { useDispatch, useSelector } from "react-redux"
import { handleLike } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') {
      return anecdotes
    }

    return anecdotes.filter(a => a.content.toLowerCase().includes(filter))
  })

  const vote = (anecdote) => {
    dispatch(handleLike(anecdote.id, anecdotes))
    dispatch(setNotification(`you voted ${anecdote.content}`, 5))
  }

  return(
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList


