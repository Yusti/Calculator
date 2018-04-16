import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { View } from 'react-native';

import * as calculatorActions from './actions';
import { selectInput, selectNewInputExpected, selectOperation, selectResult } from './selectors';

import CalculatorButton from '../../components/Calculator/CalculatorButton';

import styles from './styles';

type Actions = {
  setInput: Function,
  setNewInputExpected: Function,
  setOperation: Function,
  setResult: Function,
};

type Props = {
  input: string,
  newInputExpected: boolean,
  operation: string,
  result: number,
  actions: Actions,
};

class ButtonsGroup extends Component {
  setResult = () => {
    let { result } = this.props;
    const value = Number(this.props.input);
    switch (this.props.operation) {
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
    result = Number(parseFloat(result).toPrecision(7));
    this.props.actions.setInput(result.toString());
    this.props.actions.setNewInputExpected(true);
    this.props.actions.setResult(result);
  }
  changeOperation = (operation) => {
    if (!this.props.newInputExpected) {
      this.setResult();
    }
    this.props.actions.setOperation(operation);
  }

  changeInput = (input) => {
    let inputResult;
    if (this.props.newInputExpected
      || (this.props.input === '0' && input !== '.')
    ) {
      inputResult = input;
    } else if (input !== '.' || this.props.input.indexOf('.') === -1) {
      inputResult = this.props.input + input;
    }
    this.props.actions.setInput(inputResult);
    this.props.actions.setNewInputExpected(false);
  }

  deleteInput = () => {
    this.props.actions.setInput('0');
    this.props.actions.setNewInputExpected(true);
    this.props.actions.setOperation('');
    this.props.actions.setResult(0);
  }

  props: Props;

  render() {
    const numbers = [];
    for (let i = 9; i > 0; i -= 1) {
      numbers.push(<CalculatorButton
        key={i}
        title={i}
        onPress={() => this.changeInput(i.toString())}
      />);
    }

    return (
      <View>
        <View style={[styles.flexRow, styles.justCenter]}>
          <View style={styles.flex3}>
            <View style={[styles.grid, styles.flexRowReverse]}>{numbers}</View>
          </View>
          <View style={styles.flex1}>
            <CalculatorButton title="/" theme="operation" onPress={() => this.changeOperation('/')} />
            <CalculatorButton title="*" theme="operation" onPress={() => this.changeOperation('*')} />
            <CalculatorButton title="-" theme="operation" onPress={() => this.changeOperation('-')} />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.flex3}>
            <View style={[styles.grid, styles.flexRow]}>
              <View style={styles.flexRow}>
                <CalculatorButton title="0" style={styles.btnLg} onPress={() => this.changeInput('0')} />
                <CalculatorButton title="." onPress={() => this.changeInput('.')} />
              </View>
              <View style={styles.flexRow}>
                <CalculatorButton
                  title="Del"
                  theme="dangerOperation"
                  onPress={() => this.deleteInput()}
                />
                <CalculatorButton
                  title="="
                  theme="operation"
                  style={styles.btnLg}
                  onPress={() => this.changeOperation('=')}
                />
              </View>
            </View>
          </View>
          <View style={styles.flex1}>
            <CalculatorButton
              title="+"
              theme="operation"
              style={styles.flex1}
              onPress={() => this.changeOperation('+')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  input: selectInput(),
  newInputExpected: selectNewInputExpected(),
  operation: selectOperation(),
  result: selectResult(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calculatorActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonsGroup);
