import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toolsManagerActions from '../../actions/ToolsManagerActions';

import CalculatorIco from '../../components/icons/CalculatorIco';
import Calculator from '../../containers/Calculator';

import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class ToolsManager extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <CalculatorIco onPress={this.props.toolsManagerActions.openCalculator} />
        {this.props.activeTools.calculator && (
          <Calculator onExit={this.props.toolsManagerActions.closeCalculator} />
        )}
      </View>
    );
  }
}

ToolsManager.propTypes = {
  activeTools: PropTypes.shape({
    calculator: PropTypes.bool.isRequired,
  }).isRequired,
  toolsManagerActions: PropTypes.shape({
    openCalculator: PropTypes.func.isRequired,
    closeCalculator: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    activeTools: state.activeTools,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    toolsManagerActions: bindActionCreators(toolsManagerActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolsManager);
