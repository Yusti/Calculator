import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toolsManagerActions from '../../actions/ToolsManagerActions';

import CalculatorIco from '../../components/icons/CalculatorIco';
import Calculator from '../../containers/Calculator';

import styles from './styles';

type isActive = {
  calculator: boolean,
};

type Actions = {
  openCalculator: Function,
  closeCalculator: Function,
};

type Props = {
  activeTools: isActive,
  actions: Actions,
};

function ToolsManager({
  activeTools,
  actions,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <CalculatorIco onPress={actions.openCalculator} />
      {activeTools.calculator && (
        <Calculator onExit={actions.closeCalculator} />
      )}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    activeTools: state.activeTools,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(toolsManagerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsManager);
