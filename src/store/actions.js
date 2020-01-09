import { action_Change_FirstName, action_Change_SecondName } from "../App";

/**
 * Represents an action of first name
 * @param {string} newFirstName - The first name.
 */
export const changeFirstName = (newFirstName) => {
    return {
        type: action_Change_FirstName,
        payload: newFirstName,
    }
}


/**
 * Represents an action of second name
 * @param {string} newSecondName - The second name.
 */
export const changeSecondName = (newSecondName) => {
    return {
        type: action_Change_SecondName,
        payload: newSecondName,
    }
}