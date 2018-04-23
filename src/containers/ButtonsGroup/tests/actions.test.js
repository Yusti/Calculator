import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  setResult,
  changeOperation,
  changeInput,
  deleteInput,
} from '../actions';
import {
  SET_RESULT,
  CHANGE_OPERATION,
  CHANGE_INPUT,
  DELETE_INPUT,
} from '../constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const currentState = {
  calculator: {
    input: '10',
    newInputExpected: false,
    operation: '+',
    result: 20,
  },
};

describe('calculation actions', () => {
  it('should call set result action', () => {
    const store = mockStore(currentState);
    store.dispatch(setResult());
    expect(store.getActions()[0].type).toEqual(SET_RESULT);
  });

  it('has operation and does not expect new input so should call set result action', () => {
    const store = mockStore(currentState);
    store.dispatch(changeOperation('-'));
    expect(store.getActions()[0].type).toEqual(SET_RESULT);
    expect(store.getActions()[1].type).toEqual(CHANGE_OPERATION);
  });

  it('expect for new input so should call change operation action', () => {
    const store = mockStore({
      calculator: {
        ...currentState.calculator,
        newInputExpected: true,
      },
    });
    store.dispatch(changeOperation('-'));
    expect(store.getActions()[0].type).toEqual(CHANGE_OPERATION);
  });

  it('should call change input action', () => {
    const store = mockStore(currentState);
    store.dispatch(changeInput('1'));
    expect(store.getActions()[0].type).toEqual(CHANGE_INPUT);
  });

  it('clears all calculator states', () => {
    const store = mockStore(currentState);
    store.dispatch(deleteInput());
    expect(store.getActions()).toEqual([{ type: DELETE_INPUT }]);
  });
});
