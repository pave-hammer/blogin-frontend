import React from 'react';
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native';
import CreateBlog from './components/createblog';
import Home from './components/home';


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
        change={this.change}
      />,
      <Home />
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
