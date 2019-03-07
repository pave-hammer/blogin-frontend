import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Tooltip } from 'react-native-elements'

const Trending = (props) => {
  console.log(props.posts)
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100
      }}>
        <Tooltip popover={props.posts.map(post => <Text key={post.id}>{post.text}</Text>)}>
          {props.posts.map(post => <Text key={post.id} style={{color: 'blue', fontWeight:'bold'}}>{post.title}</Text>)}
        </Tooltip>
      </View>
    </ScrollView>
  )
}

export default Trending