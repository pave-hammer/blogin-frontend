import React from 'react'
import {
  TextInput,
  Text,
  View,
  ScrollView
 } from 'react-native'


export default class CreateBlog extends React.Component {
constructor(props){
  super(props)
}

  render() {
  return (
    <ScrollView>
    <TextInput
      style={{height: 500, borderColor: 'gray'}}
      onChange={this.props.change}
      value={this.props.text}
    />
    </ScrollView>
  )
  }
}
