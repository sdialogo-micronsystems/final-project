import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function devPlanReducer(
  state: any[] = initialState.devPlans,
  action: any
) {
  switch (action.type) {
    case types.LOAD_DEVPLANS_SUCCESS:
      return action.devPlans;
    case types.ADD_DEVPLAN:
      return [...state, { ...action.devPlan }];
    case types.DELETE_DEVPLAN:
      const id = action.devPlanId;
      return state.filter(devPlan => devPlan.id !== id);
    case types.UPDATE_DEVPLAN:
      const updatedDevPlan = state.map(item => {
        if (item.id === action.devPlan.id) {
          return { ...item, ...action.devPlan };
        }
        return item;
      });
      return updatedDevPlan;
    default:
      return state;
  }
}
