import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { View } from 'react-native';

import * as calculatorActions from './actions';

import CalculatorButton from '../../components/Calculator/CalculatorButton';

import styles from './styles';

type Actions = {
  changeOperation: Function,
  changeInput: Function,
  deleteInput: Function,
};

type Props = {
  actions: Actions,
};

function ButtonsGroup({
  actions,
}: Props) {
  const { changeOperation, changeInput, deleteInput } = actions;
  function getNumbersGroup() {
    let i = 9;
    return function () {
      const numbers = [];
      for (let j = i - 2; j <= i; j += 1) {
        numbers.push(<CalculatorButton
          key={j}
          title={j}
          onPress={() => changeInput(`${j}`)}
        />);
      }
      i -= 3;
      return numbers;
    };
  }
  const numbers = getNumbersGroup();

  return (
    <View>
      <View style={[styles.flexRow, styles.justCenter, styles.grid]}>
        <View style={styles.flexRow}>
          {numbers()}
          <CalculatorButton title="/" theme="operation" onPress={() => changeOperation('/')} />
        </View>
        <View style={styles.flexRow}>
          {numbers()}
          <CalculatorButton title="*" theme="operation" onPress={() => changeOperation('*')} />
        </View>
        <View style={styles.flexRow}>
          {numbers()}
          <CalculatorButton title="-" theme="operation" onPress={() => changeOperation('-')} />
        </View>
      </View>
      <View style={styles.flexRow}>
        <View style={styles.flex3}>
          <View style={[styles.grid, styles.flexRow]}>
            <View style={styles.flexRow}>
              <CalculatorButton title="0" style={styles.flexGrow2} onPress={() => changeInput('0')} />
              <CalculatorButton title="." onPress={() => changeInput('.')} />
            </View>
            <View style={styles.flexRow}>
              <CalculatorButton
                title="Del"
                theme="dangerOperation"
                onPress={() => deleteInput()}
              />
              <CalculatorButton
                title="="
                theme="operation"
                style={styles.flexGrow2}
                onPress={() => changeOperation('=')}
              />
            </View>
          </View>
        </View>
        <View style={styles.flex1}>
          <CalculatorButton
            title="+"
            theme="operation"
            onPress={() => changeOperation('+')}
          />
        </View>
      </View>
    </View>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(calculatorActions, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(ButtonsGroup);

