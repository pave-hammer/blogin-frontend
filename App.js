import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import CreateBlog from './components/createblog'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = 
    { text: "useless placeholder" }
  }

  
  render() {
    return (
      <CreateBlog
        text={this.state.text}
      />
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
