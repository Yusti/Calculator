const initialState = {
  input: '0',
  newInputExpected: true,
  operation: '',
  result: 0,
};

export default function calculatorState(state = initialState, action) {
  switch (action.type) {
    case 'SET_INPUT':
      return {
        ...state,
        input: action.payload,
      };
    case 'SET_NEW_INPUT_EXPECTED':
      return {
        ...state,
        newInputExpected: action.payload,
      };
    case 'SET_OPERATION':
      return {
        ...state,
        operation: action.payload,
      };
    case 'SET_RESULT':
      return {
        ...state,
        result: action.payload,
      };
    default:
      return state;
  }
}
