import React from 'react'
import { FlatList, View, Text, Button } from 'react-native'

const Trending = (props) => {
  console.log('trending props', props)
  return (
    <View>
      <Text style={{
        backgroundColor: 'grey',
        fontWeight: "bold",
        marginTop: 50
        }}>Trending posts</Text>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 50
      }}>
      <View>{props.posts.map(post => <Button color="#841584" title={post.title} key={post.id}></Button>)}</View>
      </View>
    </View>
  )
}

export default Trending