import React from 'react';
import { View } from 'react-native';

import CalculatorIco from '../components/icons/CalculatorIco';
import Calculator from '../components/Calculator';

import styles from './styles';

export default class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openCalculator: false };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <CalculatorIco onPress={() => this.setState({ openCalculator: true })} />
        {this.state.openCalculator && (
          <Calculator onPress={() => this.setState({ openCalculator: false })} />
        )}
      </View>
    );
  }
}
