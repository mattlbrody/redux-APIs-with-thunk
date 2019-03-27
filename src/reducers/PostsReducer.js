export default (state = [], action) => {
  // if the action.type matches the action, return the payload
  switch(action.type) {
    case 'FETCH_POSTS':
      return action.payload;
    default:
      return state;
  }
};