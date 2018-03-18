import React from 'react';
import PropTypes from 'prop-types';

import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function CalculatorButton({
  onPress,
  style,
  title,
  theme,
}) {
  return (
    <TouchableOpacity style={[styles.button, style, theme && styles[theme]]} onPress={onPress}>
      <Text style={[styles.text, theme === 'number' && styles.aqua]}>{title}</Text>
    </TouchableOpacity>
  );
}

CalculatorButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.any,
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
