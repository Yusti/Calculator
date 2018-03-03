import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';

import CalculatorButton from './components/CalculatorButton';
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
    const numbers = [];
    for (let i = 9; i > 0; i -= 1) {
      numbers.push(<CalculatorButton
        key={i}
        title={i}
        onPress={() => this.changeInput(i.toString())}
      />);
    }

    return (
      <View style={styles.wrapper}>
        <View style={{ flex: 7, justifyContent: 'center' }}>
          <InputField inputValue={this.state.input} />
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ flex: 3 }}>
              <View style={[styles.grid, { flexDirection: 'row-reverse' }]}>{numbers}</View>
            </View>
            <View style={{ flex: 1 }}>
              <CalculatorButton title="/" theme="operation" onPress={() => this.changeOperation('/')} />
              <CalculatorButton title="*" theme="operation" onPress={() => this.changeOperation('*')} />
              <CalculatorButton title="-" theme="operation" onPress={() => this.changeOperation('-')} />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <View style={[styles.grid, { flexDirection: 'row' }]}>
                <View style={{ flexDirection: 'row' }}>
                  <CalculatorButton title="0" style={{ width: 100 }} onPress={() => this.changeInput('0')} />
                  <CalculatorButton title="." onPress={() => this.changeInput('.')} />
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CalculatorButton title="Del" theme="dangerOperation" onPress={() => this.deleteInput()} />
                  <CalculatorButton
                    title="="
                    theme="operation"
                    style={{ width: 100 }}
                    onPress={() => this.changeOperation('=')}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <CalculatorButton
                title="+"
                theme="operation"
                style={{ flex: 1 }}
                onPress={() => this.changeOperation('+')}
              />
            </View>
          </View>
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
