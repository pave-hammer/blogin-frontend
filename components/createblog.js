import React from 'react'
import { TextInput } from 'react-native'

export default class CreateBlog extends React.Component {
constructor(props){
  super(props)
  this.state =
  { text: "useless placeholder" }
  }

  change = (text) => {
    console.log("text: ", text.nativeEvent.text)
    this.setState({text: text.text})
  }
  render() {
  return (
    <TextInput
      style={{height: 500, borderColor: 'gray'}}
      onChange={props.change}
      value={props.text}
    />
  )
  }
}