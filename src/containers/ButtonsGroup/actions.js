import {
  SET_RESULT,
  CHANGE_OPERATION,
  CHANGE_INPUT,
  DELETE_INPUT,
} from './constants';

export const setResult = () => (dispatch, getState) => {
  const state = getState();
  const { operation } = state.calculator;
  let { result } = state.calculator;
  const value = +state.calculator.input;
  switch (operation) {
    case '+':
      result += value;
      break;
    case '-':
      result -= value;
      break;
    case '*':
      result *= value;
      break;
    case '/':
      result /= value;
      break;
    default:
      result = value;
  }
  result = +parseFloat(result).toPrecision(7);
  dispatch({
    type: SET_RESULT,
    payload: {
      input: `${result}`,
      newInputExpected: true,
      result,
    },
  });
};

export const changeOperation = operation => (dispatch, getState) => {
  const state = getState();
  const { newInputExpected } = state.calculator;
  if (!newInputExpected) {
    dispatch(setResult());
  }
  dispatch({
    type: CHANGE_OPERATION,
    payload: operation,
  });
};

export const changeInput = newInput => (dispatch, getState) => {
  const state = getState();
  const { input, newInputExpected } = state.calculator;
  let inputResult;
  if (newInputExpected || (input === '0' && newInput !== '.')
  ) {
    inputResult = newInput;
  } else if (newInput !== '.' || input.indexOf('.') === -1) {
    inputResult = input + newInput;
  }
  dispatch({
    type: CHANGE_INPUT,
    payload: {
      input: inputResult,
      newInputExpected: false,
    },
  });
};

export function deleteInput() {
  return {
    type: DELETE_INPUT,
  };
}
