import React from 'react'
import { FlatList, View, Text } from 'react-native'

const Trending = (props) => {
  console.log('trending props', props)
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>Trending posts</Text>
      <View>{props.posts.map(post => <Text style={{color: 'blue',
    fontWeight: 'bold',
    fontSize: 30}} key={post.id}>{post.title}</Text>)}</View>
    </View>
  )
}

export default Trending