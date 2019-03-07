import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'

const Trending = (props) => {
  return (
    <ScrollView>
      <View style={{
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 100
      }}>
        {/* <Tooltip popover={<Text>Info here</Text>}>
          <Text>Press me</Text>
        </Tooltip> */}
        <View>{props.posts.map(post => <Button title={post.title} key={post.id}></Button>)}</View>
      </View>
    </ScrollView>
  )
}

export default Trending