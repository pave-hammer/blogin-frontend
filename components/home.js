import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

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
