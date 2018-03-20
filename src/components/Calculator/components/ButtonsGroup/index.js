import React from 'react';

import { View } from 'react-native';

import CalculatorButton from '../CalculatorButton';

import styles from './styles';

type Props = {
  changeOperation: Function,
  changeInput: Function,
  deleteInput: Function,
}

export default function ButtonsGroup({
  changeOperation,
  changeInput,
  deleteInput,
}: Props) {
  const numbers = [];
  for (let i = 9; i > 0; i -= 1) {
    numbers.push(<CalculatorButton key={i} title={i} onPress={() => changeInput(i.toString())} />);
  }
  return (
    <View>
      <View style={[styles.flexRow, styles.justCenter]}>
        <View style={styles.flex3}>
          <View style={[styles.grid, styles.flexRowReverse]}>{numbers}</View>
        </View>
        <View style={styles.flex1}>
          <CalculatorButton title="/" theme="operation" onPress={() => changeOperation('/')} />
          <CalculatorButton title="*" theme="operation" onPress={() => changeOperation('*')} />
          <CalculatorButton title="-" theme="operation" onPress={() => changeOperation('-')} />
        </View>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.flex3}>
          <View style={[styles.grid, styles.flexRow]}>
            <View style={styles.flexRow}>
              <CalculatorButton title="0" style={styles.btnLg} onPress={() => changeInput('0')} />
              <CalculatorButton title="." onPress={() => changeInput('.')} />
            </View>
            <View style={styles.flexRow}>
              <CalculatorButton title="Del" theme="dangerOperation" onPress={() => deleteInput()} />
              <CalculatorButton title="=" theme="operation" style={styles.btnLg} onPress={() => changeOperation('=')} />
            </View>
          </View>
        </View>
        <View style={styles.flex1}>
          <CalculatorButton title="+" theme="operation" style={styles.flex1} onPress={() => changeOperation('+')} />
        </View>
      </View>
    </View>
  );
}
