import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, StatusBar } from 'react-native'
import { Button } from 'react-native-elements';
import styles from './styles'
import Trending from './trending'

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
        const api = await fetch('https://bilbobloginsbackend.herokuapp.com/')
        const blogs = await fetch('https://bilbobloginsbackend.herokuapp.com/posts')
        const awaitapi = await api.json()
        const awaitposts = await blogs.json()
        this.setState({blogs: awaitapi})
        this.setState({posts: awaitposts})
        // console.log(this.state.posts.map(post => post.title))
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
          onPress={() => navigate('CreateBlog', {
            change: this.change,
            text: this.state.text
          })}
        />
        <Trending
        posts={this.state.posts}/>
      </View>
    )
  }

}



AppRegistry.registerComponent('App', () => App)
