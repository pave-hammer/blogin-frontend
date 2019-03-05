import React from 'react'
import { TextInput } from 'react-native'

const CreateBlog = (props) => {

  return (
    <TextInput
      style={{height: 500, borderColor: 'gray'}}
      onChangeText={(text) => this.setState({text})}
      value={props.text}
    />
  )
}

export default CreateBlog