import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
        </View>
        <Button style={styles.navbar}
          title="Dashboard"
          type="outline"
          
        />
      </View>
    )
  }
}


AppRegistry.registerComponent('App', () => App)