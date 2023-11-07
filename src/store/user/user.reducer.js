import { USER_ACTION_TYPES } from "./user.type";
const INITITAL_SATE = {
  currentUser: null,
};
export const userReducer = (state = INITITAL_SATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};
