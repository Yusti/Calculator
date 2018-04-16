import React from 'react';
import { connect } from 'react-redux';

import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import ButtonsGroup from '../ButtonsGroup';
import InputField from '../../components/Calculator/InputField';

import styles from './styles';

type Props = {
  input: string,
  onExit: Function,
};

function Calculator({
  input,
  onExit,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <InputField inputValue={input} />
        <ButtonsGroup />
        <TouchableOpacity onPress={onExit} style={styles.marginTopLg}>
          <Text style={styles.exitCopy}>Exit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

function mapStateToProps(state) {
  return {
    input: state.calculator.input,
  };
}

export default connect(mapStateToProps)(Calculator);
