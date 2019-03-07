import React from 'react';
import CreateBlog from './components/createblog';
import Home from './components/home';
import Dashboard from './components/dashboard';
import Trending from './components/trending';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  CreateBlog: {screen: CreateBlog},
  Dashboard: {screen: Dashboard},
  Trending: {screen: Trending}
});

const App = createAppContainer(MainNavigator);

export default App
