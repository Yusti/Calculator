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

describe('Calculator reducer', () => {
  it('should calculate result', async () => {
    const store = mockStore(currentState);
    await store.dispatch(setResult());
    const nextState = reducer(currentState, store.getActions()[0]);
    return expect(nextState.calculator.result).toEqual(30);
  });

  it('should change operation', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        newInputExpected: true,
      },
    };
    const store = mockStore(modifiedState);
    await store.dispatch(changeOperation('-'));
    const nextState = reducer(modifiedState, store.getActions()[0]);
    return expect(nextState.calculator.operation).toEqual('-');
  });

  it('should change input when new input does not expected', async () => {
    const store = mockStore(currentState);
    await store.dispatch(changeInput('2'));
    const nextState = reducer(currentState, store.getActions()[0]);
    return expect(nextState.calculator.input).toEqual('102');
  });

  it('should change input when new input expected', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        newInputExpected: true,
      },
    };
    const store = mockStore(modifiedState);
    await store.dispatch(changeInput('2'));
    const nextState = reducer(modifiedState, store.getActions()[0]);
    return expect(nextState.calculator.input).toEqual('2');
  });

  it('should change input when current input equals 0', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        input: '0',
      },
    };
    const store = mockStore(modifiedState);
    await store.dispatch(changeInput('2'));
    const nextState = reducer(modifiedState, store.getActions()[0]);
    return expect(nextState.calculator.input).toEqual('2');
  });

  it('should change input when current input equals 0 and next is .', async () => {
    const modifiedState = {
      calculator: {
        ...currentState.calculator,
        input: '0',
      },
    };
    const store = mockStore(modifiedState);
    await store.dispatch(changeInput('.'));
    const nextState = reducer(modifiedState, store.getActions()[0]);
    return expect(nextState.calculator.input).toEqual('0.');
  });

  it('should return the initial state on delete operation', async () => {
    const store = mockStore(currentState);
    await store.dispatch(deleteInput());
    const nextState = reducer(currentState, store.getActions()[0]);
    return expect(nextState.calculator).toEqual(initialState.calculator);
  });

  it('should calculate  2 + 3', async () => {
    let store = mockStore(initialState);
    await store.dispatch(changeInput('2'));
    const nextState1 = reducer(initialState, store.getActions()[0]);

    store = mockStore(nextState1);
    await store.dispatch(changeOperation('+'));
    let nextState2 = reducer(nextState1, store.getActions()[0]);
    nextState2 = reducer(nextState2, store.getActions()[1]);

    store = mockStore(nextState2);
    await store.dispatch(changeInput('3'));
    const nextState3 = reducer(nextState2, store.getActions()[0]);

    store = mockStore(nextState3);
    await store.dispatch(changeOperation('='));
    let nextState4 = reducer(nextState3, store.getActions()[0]);
    nextState4 = reducer(nextState4, store.getActions()[1]);
    return expect(nextState4.calculator.result).toEqual(5);
  });
});
