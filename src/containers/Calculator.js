import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActions from '../actions/CalculatorActions';

import CalculatorView from '../components/Calculator';

type CalculatorVars = {
  input: string,
  newInputExpected: boolean,
  operation: string,
  result: number,
};

type Actions = {
  setInput: Function,
  setNewInputExpected: Function,
  setOperation: Function,
  setResult: Function,
};

type Props = {
  onExit: Function,
  calculator: CalculatorVars,
  actions: Actions,
};

function Calculator({
  calculator,
  onExit,
  actions,
}: Props) {
  const {
    input,
    newInputExpected,
    operation,
    result,
  } = calculator;
  const {
    setInput,
    setNewInputExpected,
    setOperation,
    setResult,
  } = actions;
  return (
    <CalculatorView
      input={input}
      newInputExpected={newInputExpected}
      operation={operation}
      result={result}
      setInput={setInput}
      setNewInputExpected={setNewInputExpected}
      setOperation={setOperation}
      setResult={setResult}
      onExit={onExit}
    />
  );
}

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calculatorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
