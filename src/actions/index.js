export const ADD_ITEM = 'ADD_ITEM';
export const addItemAC = item => {
  console.log(item);
  return { type: ADD_ITEM, payload: item };
};

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItemAC = item => {
  return { type: REMOVE_ITEM, payload: item };
};