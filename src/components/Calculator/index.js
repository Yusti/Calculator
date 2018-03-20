import React, { Component } from 'react';

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import ButtonsGroup from './components/ButtonsGroup';
import InputField from './components/InputField';

import styles from './styles';

type Props = {
  onExit: Function,
  input: string,
  newInputExpected: boolean,
  operation: string,
  result: number,
  setInput: Function,
  setNewInputExpected: Function,
  setOperation: Function,
  setResult: Function,
};

export default class Calculator extends Component {
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

  props: Props;

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
