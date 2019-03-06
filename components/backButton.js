import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { NativeRouter, Route, Link } from "react-router-native";
import Home from './home'


import {
  View,
  ScrollView,
 } from 'react-native'



const BackButton = (props) => {
  return (
    <NativeRouter>
    <View>
      <Link
        to={'/home'}
        underlayColor="#f0f4f7"
      >
      <Button
      buttonStyle={{display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start', width: 52}}
      icon={
        <Icon
        name="arrow-circle-left"
        size={40}
        />
      }
      type="clear"
      title=""
      >
      </Button>
      </Link>
    </View>
    </NativeRouter>
  )
}

export default BackButton
