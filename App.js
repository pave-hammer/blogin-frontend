import React from 'react'
import CreateBlog from './components/createblog'
import BackButton from './components/backButton'
import HomeScreen from './components/homescreen'

import Home from './components/home'
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: CreateBlog},
});

const App = createAppContainer(MainNavigator);

export default App;
