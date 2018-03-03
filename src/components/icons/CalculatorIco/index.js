import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

export default function CalculatorIco({ onPress }) {
  return (
    <View style={styles.icon} width={100} height={100}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome
          name="calculator"
          size={60}
          style={[styles.colorBlue, { padding: 5, paddingRight: 0 }]}
        />
        <Text style={styles.colorBlue}>Calculator</Text>
      </TouchableOpacity>
    </View>
  );
}

CalculatorIco.propTypes = {
  onPress: PropTypes.func.isRequired,
};
