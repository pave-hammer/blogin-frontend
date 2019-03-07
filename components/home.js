import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    const url = 'https://bilbobloginsbackend.herokuapp.com/'
    try {
      const api = await fetch(url)
      const awaitapi = await api.json()
      this.setState({blogs: awaitapi})
      console.log(this.state.blogs[0].posts[0].title)
    } catch(err) {
      console.log("Error fetching data-----------", err)
    }
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={{color: 'red'}}>
        <StatusBar hidden />
        <View style={styles.header}>
        <Text style={styles.text}>#Trending</Text>
        </View>
        <Button style={styles.navbar}
          title="Dashboard"
          type="outline"
          onPress={() => navigate('Dashboard')}
        />
      </View>
    )
  }

}



AppRegistry.registerComponent('App', () => App)
