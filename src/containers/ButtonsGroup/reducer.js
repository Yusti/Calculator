import {
  SET_RESULT,
  CHANGE_OPERATION,
  CHANGE_INPUT,
  DELETE_INPUT,
} from './constants';

const initialState = {
  input: '0',
  newInputExpected: true,
  operation: '',
  result: 0,
};

export default function calculatorState(state = initialState, action) {
  switch (action.type) {
    case SET_RESULT:
      return {
        ...state,
        ...action.payload,
      };
    case CHANGE_OPERATION:
      return {
        ...state,
        operation: action.payload,
      };
    case CHANGE_INPUT:
      return {
        ...state,
        ...action.payload,
      };
    case DELETE_INPUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
