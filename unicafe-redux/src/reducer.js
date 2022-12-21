const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  const stateToChange = {...state}
  switch (action.type) {
    case 'GOOD':
      stateToChange.good += 1
      return stateToChange
    case 'OK':
      stateToChange.ok += 1
      return stateToChange
    case 'BAD':
      stateToChange.bad += 1
      return stateToChange
    case 'ZERO':
      stateToChange.good = 0
      stateToChange.ok = 0
      stateToChange.bad = 0
      return stateToChange
    default: return stateToChange
  }  
}

export default counterReducer