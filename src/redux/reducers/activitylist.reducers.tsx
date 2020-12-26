const initialState = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Locked Car REDUX",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Locked Home Door REDUX",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Took medicine REDUX",
  },
];

export function activityListReducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_NEW_ACTIVITY":
      return [...state, action.item];
    default:
      return state;
  }
}
