export const selectOption = (option) => {
  return {
    type: 'SELECT_OPTION',
    payload: option,
  };
};
