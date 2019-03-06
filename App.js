import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import CreateBlog from './components/createblog.js'
import Dashboard from './components/dashboard.js'

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
  //   const url = 'http://localhost:3002'
  //   try {
  //     const info = await fetch(url)
  //     const data = await info.json()
  //     console.log(data)
  //   } catch(err) {
  //     console.log(err)
  //   }
  // }

  // async componentDidMount() {
  //   const url = 'http://127.0.0.1:3002/test'
  //   try { 
  //     const api = await fetch(url)
  //     const awaitapi = await api.json()
  //     this.setState({blogs: awaitapi})
  //   } catch(err) {
  //     console.log("Error fetching data-----------", err)
  //   }
  // }

  change = (text) => {
    console.log("text: ", text.nativeEvent.text)
    this.setState({text: text.text})
  }

  render() {
    return (
      <Dashboard />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
