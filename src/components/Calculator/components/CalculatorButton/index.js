import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';

import styles from './styles';

export default function CalculatorButton({
  onPress,
  style,
  title,
  theme,
}) {
  return (
    <TouchableOpacity style={[styles.button, style, theme && styles[theme]]} onPress={onPress}>
      <Text style={[styles.text, { color: theme === 'number' ? '#5cc6b6' : 'white' }]}>{title}</Text>
    </TouchableOpacity>
  );
}

CalculatorButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  theme: PropTypes.oneOf(['number', 'operation', 'dangerOperation']),
};

CalculatorButton.defaultProps = {
  style: {},
  theme: 'number',
};
