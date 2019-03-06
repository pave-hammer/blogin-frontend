import React from 'react'
import { FlatList, View } from 'react-native'

const Trending = (props) => {

  return (
    <View style={{
      flexDirection: 'row',
      height: 200,
      padding: 50,
    }}>
      <FlatList>{props.blogtitles()}</FlatList>
    </View>
  )
}

export default Trending