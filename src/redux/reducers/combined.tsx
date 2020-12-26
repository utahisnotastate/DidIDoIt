import { combineReducers } from "redux";
import { activityListReducer } from "./activitylist.reducers";
import { historyReducer } from "./history.reducers";

const rootReducer = combineReducers({
  activitylist: activityListReducer,
  history: historyReducer,
});

export default rootReducer;
