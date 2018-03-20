import React from 'react';

import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

type Props = {
  onPress: Function,
  style: any,
  title: string | number,
  theme: 'number' | 'operation' | 'dangerOperation',
};

export default function CalculatorButton({
  onPress,
  style,
  title,
  theme = 'number',
}: Props) {
  return (
    <TouchableOpacity style={[styles.button, style, theme && styles[theme]]} onPress={onPress}>
      <Text style={[styles.text, theme === 'number' && styles.aqua]}>{title}</Text>
    </TouchableOpacity>
  );
}
