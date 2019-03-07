import React from 'react'
import { FlatList, View, Text, Button } from 'react-native'

const Trending = (props) => {
  console.log('trending props', props)
  return (
    <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
    <Text>Trending posts</Text>
      <View>{props.posts.map(post => <Button onPress={""} title={post.title} style={articleTitleStyles} key={post.id}></Button>)}</View>
    </View>
  )
}


const articleTitleStyles = {color: 'blue', fontWeight: 'bold', fontSize: 20}

export default Trending