import { compose, createStore, applyMiddleware } from "redux";

//import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const loggerMidlleware = (state) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }
  console.log("type", action.type);
  console.log("payload", action.payload);
  console.log("currentState", store.getState());
  next(action);
};
const middleWares = [loggerMidlleware];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
