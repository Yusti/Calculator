import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';

import CalculatorButton from '../CalculatorButton';

import styles from './styles';

export default function ButtonsGroup({
  changeOperation,
  changeInput,
  deleteInput,
}) {
  const numbers = [];
  for (let i = 9; i > 0; i -= 1) {
    numbers.push(<CalculatorButton key={i} title={i} onPress={() => changeInput(i.toString())} />);
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flex: 3 }}>
          <View style={[styles.grid, { flexDirection: 'row-reverse' }]}>{numbers}</View>
        </View>
        <View style={{ flex: 1 }}>
          <CalculatorButton title="/" theme="operation" onPress={() => changeOperation('/')} />
          <CalculatorButton title="*" theme="operation" onPress={() => changeOperation('*')} />
          <CalculatorButton title="-" theme="operation" onPress={() => changeOperation('-')} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 3 }}>
          <View style={[styles.grid, { flexDirection: 'row' }]}>
            <View style={{ flexDirection: 'row' }}>
              <CalculatorButton title="0" style={{ width: 120 }} onPress={() => changeInput('0')} />
              <CalculatorButton title="." onPress={() => changeInput('.')} />
            </View>
            <View style={{ flexDirection: 'row' }}>
              <CalculatorButton title="Del" theme="dangerOperation" onPress={() => deleteInput()} />
              <CalculatorButton title="=" theme="operation" style={{ width: 120 }} onPress={() => changeOperation('=')} />
            </View>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <CalculatorButton title="+" theme="operation" style={{ flex: 1 }} onPress={() => changeOperation('+')} />
        </View>
      </View>
    </View>
  );
}

ButtonsGroup.propTypes = {
  changeOperation: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
  deleteInput: PropTypes.func.isRequired,
};
