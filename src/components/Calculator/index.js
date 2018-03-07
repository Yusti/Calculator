import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import ButtonsGroup from './components/ButtonsGroup';
import InputField from './components/InputField';

import styles from './styles';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0',
      newInputExpected: false,
      operation: '',
      result: 0,
    };
  }

  setResult = () => {
    let { result } = this.state;
    const value = Number(this.state.input);
    switch (this.state.operation) {
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
    this.setState({
      result,
      input: result.toString(),
      newInputExpected: true,
    });
  }

  changeOperation = (operation) => {
    if (!this.state.newInputExpected) {
      this.setResult();
    }
    this.setState({ operation });
  }

  changeInput = (input) => {
    if (this.state.newInputExpected) {
      this.setState({
        input,
        newInputExpected: false,
      });
    } else if (this.state.input === '0' && input !== '.') {
      this.setState({ input });
    } else if (input !== '.' || this.state.input.indexOf('.') === -1) {
      this.setState({ input: this.state.input + input });
    }
  }

  deleteInput = () => {
    this.setState({
      input: '0',
      result: 0,
      newInputExpected: true,
    });
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 7, justifyContent: 'center' }}>
          <InputField inputValue={this.state.input} />
          <ButtonsGroup
            changeOperation={this.changeOperation}
            changeInput={this.changeInput}
            deleteInput={this.deleteInput}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={this.props.onPress}>
            <Text style={{ textAlign: 'right', color: '#e54856' }}>Exit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Calculator.propTypes = {
  onPress: PropTypes.func.isRequired,
};
