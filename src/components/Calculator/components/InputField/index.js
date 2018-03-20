import React from 'react';

import { TextInput } from 'react-native';

import styles from './styles';

type Props = {
  inputValue: string,
};

export default function InputField({ inputValue }: Props) {
  return (<TextInput style={styles.input} value={inputValue} underlineColorAndroid="transparent" />);
}
