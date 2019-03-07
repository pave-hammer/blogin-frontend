import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "useless placeholder",
      blogs: [],
      posts: []
    }
  }

  static navigationOptions = {
    header: null
  };

  async componentDidMount() {
    try {
        const api = await fetch('http://localhost:3002')
        const blogs = await fetch('http://localhost:3002/posts')
        const awaitapi = await api.json()
        const awaitposts = await blogs.json()
        this.setState({blogs: awaitapi})
        this.setState({posts: awaitposts})
        console.log(this.state.posts.map(post => post.title))
    } catch(err) {
        console.log("Error fetching data-----------", err)
    }
}

  change = (text) => {
    this.setState({text: text.text})
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
