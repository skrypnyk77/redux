import { action_Change_FirstName, action_Change_SecondName } from "../App";

/**
 * @param initialState - Information about the initialState.
 * @param initialState.firstName, @param initialState.secondName - Information about the initialState fields
 */
const initialState = {
  firstName: "Kirill",
  secondName: "Skrypnyk"
};

/**
 * @function rootReducer - Represents a reducer
 * @param {Object} action - description of action
 * @param {string} state - getting state from initial state
 */
export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case action_Change_FirstName:
      return { ...state, firstName: action.payload };
    case action_Change_SecondName:
      return { ...state, secondName: action.payload };
  }

  return state;
};
