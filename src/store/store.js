import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
//import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
import logger from "redux-logger";
// const loggerMidlleware = (state) => (next) => (action) => {
//   if (!action.type) {
//     return next(action);
//   }
//   console.log("type", action.type);
//   console.log("payload", action.payload);
//   console.log("currentState", store.getState());
//   next(action);
// };
const middleWares = [logger, thunk];
const composedEnhancers = compose(applyMiddleware(...middleWares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
