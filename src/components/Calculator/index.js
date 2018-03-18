import React from 'react';
import PropTypes from 'prop-types';

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import ButtonsGroup from './components/ButtonsGroup';
import InputField from './components/InputField';

import styles from './styles';

export default class Calculator extends React.Component {
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
    this.props.setInput(result.toString());
    this.props.setNewInputExpected(true);
    this.props.setResult(result);
  }

  changeOperation = (operation) => {
    if (!this.props.newInputExpected) {
      this.setResult();
    }
    this.props.setOperation(operation);
  }

  changeInput = (input) => {
    let inputResult;
    if (this.props.newInputExpected || (this.props.input === '0' && input !== '.')) {
      inputResult = input;
    } else if (input !== '.' || this.props.input.indexOf('.') === -1) {
      inputResult = this.props.input + input;
    }
    this.props.setInput(inputResult);
    this.props.setNewInputExpected(false);
  }

  deleteInput = () => {
    this.props.setInput('0');
    this.props.setNewInputExpected(true);
    this.props.setOperation('');
    this.props.setResult(0);
  }

  render() {
    const { input, onExit } = this.props;
    return (
      <View style={styles.wrapper}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <InputField inputValue={input} />
          <ButtonsGroup
            changeOperation={this.changeOperation}
            changeInput={this.changeInput}
            deleteInput={this.deleteInput}
          />
          <TouchableOpacity onPress={onExit} style={styles.marginTopLg}>
            <Text style={styles.exitCopy}>Exit</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

Calculator.propTypes = {
  onExit: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  newInputExpected: PropTypes.bool.isRequired,
  operation: PropTypes.string.isRequired,
  result: PropTypes.number.isRequired,
  setInput: PropTypes.func.isRequired,
  setNewInputExpected: PropTypes.func.isRequired,
  setOperation: PropTypes.func.isRequired,
  setResult: PropTypes.func.isRequired,
};
