export const ADD_ITEM = 'ADD_ITEM';
export const addItemAC = item => {
  console.log(title);
  return { type: ADD_ITEM, payload: title };
};

export const REMOVE_ITEM = 'REMOVE_ITEM';
export const removeItemAC = id => {
  return { type: REMOVE_ITEM, payload: id };
};