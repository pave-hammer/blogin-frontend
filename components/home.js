import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'
import Trending from './trending';
import CreateBlog from './createblog';

export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = { 
      displayBlog: false
    }
  }
  handleClick = (e) => {
    this.setState({displayBlog: true})
    }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
        </View>
        {this.state.displayBlog ? <CreateBlog /> : null}
        <Trending 
        posts={this.props.posts}
        state={this.props} />
        <Button 
          onPress={() => this.handleClick(this)}
          style={styles.navbar} 
          title="Create Blog Post"
          type="outline"
        />
      </View>
    )
  }

}


AppRegistry.registerComponent('App', () => App)