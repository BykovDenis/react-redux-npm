export default function playlist(state = [], action) {
  if (action.type === 'ADD_PLAYLIST') {
    return [
      ...state,
      action.payload
  ];
  }
  return state;
}