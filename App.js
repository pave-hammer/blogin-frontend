
import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import CreateBlog from './components/createblog.js'
import Home from './components/home';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: []
    }
  }

  // componentDidMount() {
  //   this.getData()
  // }

  // getData = async() => {
  //   const url = 'https://bilbobloginsbackend.herokuapp.com/'
  //   try {
  //     const info = await fetch(url)
  //     const data = await info.json()
  //     console.log(data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

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
      <CreateBlog
        text={this.state.text}
        change={this.change}
      />,
      <Home />,
      <Dashboard />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  
  },
})
