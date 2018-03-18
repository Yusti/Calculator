import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calculatorActions from '../actions/CalculatorActions';

import CalculatorView from '../components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    const {
      input,
      newInputExpected,
      operation,
      result,
    } = this.props.calculator;
    const {
      setInput,
      setNewInputExpected,
      setOperation,
      setResult,
    } = this.props.calculatorActions;
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
        onExit={this.props.onExit}
      />
    );
  }
}

Calculator.propTypes = {
  onExit: PropTypes.func.isRequired,
  calculator: PropTypes.shape({
    input: PropTypes.string.isRequired,
    newInputExpected: PropTypes.bool.isRequired,
    operation: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired,
  }).isRequired,
  calculatorActions: PropTypes.shape({
    setInput: PropTypes.func.isRequired,
    setNewInputExpected: PropTypes.func.isRequired,
    setOperation: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
  }).isRequired,
};


function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    calculatorActions: bindActionCreators(calculatorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
