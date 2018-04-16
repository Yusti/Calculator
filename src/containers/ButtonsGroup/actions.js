import {
  SET_INPUT,
  SET_NEW_INPUT_EXPECTED,
  SET_OPERATION,
  SET_RESULT,
} from './constants';

export function setInput(input) {
  return {
    type: SET_INPUT,
    payload: input,
  };
}

export function setNewInputExpected(newInputExpected) {
  return {
    type: SET_NEW_INPUT_EXPECTED,
    payload: newInputExpected,
  };
}

export function setOperation(operation) {
  return {
    type: SET_OPERATION,
    payload: operation,
  };
}

export function setResult(result) {
  return {
    type: SET_RESULT,
    payload: result,
  };
}
