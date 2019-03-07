import React from 'react'
import { StyleSheet, Text, View, AppRegistry, TextInput } from 'react-native'
import {createStackNavigator, createAppContainer} from 'react-navigation';
import CreateBlog from './components/createblog.js'
import Home from './components/home.js';
import Dashboard from './components/dashboard.js'

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);

class App extends React.Component {
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

  change = (text) => {
    console.log("text: ", text.nativeEvent.text)
    this.setState({text: text.text})
  }

  render() {
    return (
      // <Dashboard />,
      // <CreateBlog
      //   text={this.state.text}
      //   change={this.change}
      // />,
      // <Home />
      <View>
        Hello World!
      </View>
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
