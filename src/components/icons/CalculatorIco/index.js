import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import styles from './styles';

type Props = {
  onPress: Function,
};

export default function CalculatorIco({ onPress }: Props) {
  return (
    <View style={styles.label}>
      <TouchableOpacity onPress={onPress}>
        <FontAwesome
          name="calculator"
          size={60}
          style={styles.icon}
        />
        <Text style={styles.copy}>Calculator</Text>
      </TouchableOpacity>
    </View>
  );
}
