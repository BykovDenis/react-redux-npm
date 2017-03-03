const initialState = [{
  cityid: 523323,
  clouds: 0.4,
  wind: 12
}]

export default function weather(state = initialState, action) {
  if (action.type === 'ADD_WEATHER') {
    return [
      ...state,
      action.payload
  ]
  }
  
  return state;
}
