import React from 'react'
import { TextInput } from 'react-native'

const CreateBlog = (props) => {

  return (
    <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={props.text}
    />
  )
}

export default CreateBlog