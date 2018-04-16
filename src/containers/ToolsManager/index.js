import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import * as toolsManagerActions from './actions';
import { selectIsCalculatorActive } from './selectors';

import CalculatorIco from '../../components/icons/CalculatorIco';
import Calculator from '../../containers/Calculator';

import styles from './styles';

type Actions = {
  openCalculator: Function,
  closeCalculator: Function,
};

type Props = {
  actions: Actions,
  calculator: boolean,
};

function ToolsManager({
  calculator,
  actions,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <CalculatorIco onPress={actions.openCalculator} />
      {calculator && (
        <Calculator onExit={actions.closeCalculator} />
      )}
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  calculator: selectIsCalculatorActive(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toolsManagerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsManager);
