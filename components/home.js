import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'
import Trending from './trending';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
        </View>
        <Button style={styles.navbar}
          title="Create Blog Post"
          type="outline"
        />
        <Trending 
        posts={this.props.posts}
        state={this.props}>

        </Trending>
        
      </View>
    )
  }
}


AppRegistry.registerComponent('App', () => App)