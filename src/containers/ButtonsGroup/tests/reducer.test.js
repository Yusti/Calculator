import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import reducer from '../../../reducers';
import {
  setResult,
  changeOperation,
  changeInput,
  deleteInput,
} from '../actions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const initialState = {
  calculator: {
    input: '0',
    newInputExpected: true,
    operation: '',
    result: 0,
  },
};
const currentState = {
  calculator: {
    input: '10',
    newInputExpected: false,
    operation: '+',
    result: 20,
  },
};
function applyAction(state, action) {
  const store = mockStore(state);
  store.dispatch(action);
  let nextState = state;
  for (let i = 0; i < store.getActions().length; i += 1) {
    nextState = reducer(nextState, store.getActions()[i]);
  }
  return nextState;
}

describe('Calculator reducer', () => {
  it('should calculate result', async () => {
    const nextState = await applyAction(currentState, setResult());
    return expect(nextState.calculator.result).toEqual(30);
  });

  it('should change operation', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        newInputExpected: true,
      },
    };
    const nextState = await applyAction(modifiedState, changeOperation('-'));
    return expect(nextState.calculator.operation).toEqual('-');
  });

  it('should change input when new input does not expected', async () => {
    const nextState = await applyAction(currentState, changeInput('2'));
    return expect(nextState.calculator.input).toEqual('102');
  });

  it('should change input when new input expected', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        newInputExpected: true,
      },
    };
    const nextState = await applyAction(modifiedState, changeInput('2'));
    return expect(nextState.calculator.input).toEqual('2');
  });

  it('should change input when current input equals 0', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        input: '0',
      },
    };
    const nextState = await applyAction(modifiedState, changeInput('2'));
    return expect(nextState.calculator.input).toEqual('2');
  });

  it('should change input when current input equals 0 and next is .', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        input: '0',
      },
    };
    const nextState = await applyAction(modifiedState, changeInput('.'));
    return expect(nextState.calculator.input).toEqual('0.');
  });

  it('should return the initial state on delete operation', async () => {
    const nextState = await applyAction(currentState, deleteInput());
    return expect(nextState.calculator).toEqual(initialState.calculator);
  });

  it('should calculate  2 + 3', async () => {
    let nextState = await applyAction(initialState, changeInput('2'));
    nextState = await applyAction(nextState, changeOperation('+'));
    nextState = await applyAction(nextState, changeInput('3'));
    nextState = await applyAction(nextState, changeOperation('='));

    return expect(nextState.calculator.result).toEqual(5);
  });
});
