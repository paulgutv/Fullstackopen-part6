import { createSlice } from "@reduxjs/toolkit"

const initialState = null
let isTimer

const notificationSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    clearNotification(state, action) {
      return null
    },
    newNotification(state, action) {
      return action.payload
    }
  }
})

export const { clearNotification, newNotification } = notificationSlice.actions

export const setNotification = (content, timer) => {
  return dispatch => {
    if(isTimer) {
      clearTimeout(isTimer)
    }
    dispatch(newNotification(content))
    const seconds = timer*1000
    isTimer = setTimeout(() => {
      dispatch(clearNotification())
    }, seconds)
  }
}

export default notificationSlice.reducer