import { Fetch_NEW_GREETING_SUCCESS, Fetch_NEW_GREETING_FAILURE } from './action';
const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Fetch_NEW_GREETING_SUCCESS:
      return action.payload;
    case Fetch_NEW_GREETING_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
