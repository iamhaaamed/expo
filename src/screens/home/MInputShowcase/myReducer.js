/**
 * @typedef {object} MyState
 * @property {string} firstName
 * @property {string} middleName
 * @property {string} lastName
 * @property {string} nickName
 * @property {string} username
 * @property {string} jobName
 * @property {string} description
 */

/**
 * @param {MyState} state
 * @param {{inputName: string, value: any}} action
 */
export const myReducer = (state, { inputName, value }) => {
  return {
    ...state,
    [inputName]: value,
  };
};
