import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{width:'140%'}}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 50,

  },
  text: {
    backgroundColor: 'steelblue',
    color: 'white',
    fontSize: 24,
    padding: 10,
  },
  navbar: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 30,
  }
})

AppRegistry.registerComponent('App', () => App)
