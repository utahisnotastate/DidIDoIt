const initialState = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item REDUX",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item REDUX",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item REDUX",
  },
];

export function historyReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ACTIVITY_TO_HISTORY_LIST":
      return [...state, action.item];

    case "DELETE_ACTIVITY_FROM_HISTORY_LIST":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
