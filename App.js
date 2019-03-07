
import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import CreateBlog from './components/createblog'
import Trending from './components/trending'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: "useless placeholder",
      blogs: [],
      posts: []
    }
  }

  async componentDidMount() {
    try { 
        const api = await fetch('http://localhost:3002')
        const blogs = await fetch('http://localhost:3002/posts')
        const awaitapi = await api.json()
        const awaitposts = await blogs.json()
        this.setState({blogs: awaitapi})
        this.setState({posts: awaitposts})
    } catch(err) {
        console.log("Error fetching data-----------", err)
    }
  }

  change = (text) => {
    this.setState({text: text.text})
  }

  render() {
    return (
      <View>
        <Trending 
          posts={this.state.posts}
        />
      </View>
    )
  }
}
