import {
  OPEN_CALCULATOR,
  CLOSE_CALCULATOR,
} from './constants';

const initialState = {
  calculator: false,
};

export default function toolsState(state = initialState, action) {
  switch (action.type) {
    case OPEN_CALCULATOR:
    case CLOSE_CALCULATOR:
      return {
        ...state,
        calculator: action.payload,
      };
    default:
      return state;
  }
}
