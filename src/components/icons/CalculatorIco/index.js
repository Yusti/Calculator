import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles'

export default class CalculatorIco extends React.Component {
  render() {
    return (
        <View style={styles.icon} width={100} height={100}>
            <TouchableOpacity
                underlayColor="rgba(255,255,255,.5)"
                onPress={this.props.onPress}
            >
                <FontAwesome name="calculator" size={60} style={[styles.colorBlue, {padding: 5, paddingRight: 0}]} />
            </TouchableOpacity>
            <Text style={styles.colorBlue}>Calculator</Text>
        </View>
    )
  }
}
