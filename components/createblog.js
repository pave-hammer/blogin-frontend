import React from 'react'
import {
  TextInput,
  Text,
  View,
  ScrollView
 } from 'react-native'


const CreateBlog = (props) => {

  return (
    <ScrollView>
    <TextInput
      style={{height: 500, borderColor: 'gray'}}
      onChange={props.change}
      value={props.text}
    />
    </ScrollView>
  )
}

export default CreateBlog
