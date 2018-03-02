import React from 'react';
import PropTypes from 'prop-types';

import { TextInput } from 'react-native';

import styles from './styles';

export default function InputField({ inputValue }) {
  return (<TextInput style={styles.input} value={inputValue} />);
}

InputField.propTypes = {
  inputValue: PropTypes.string.isRequired,
};
