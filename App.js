import React from 'react';
import CreateBlog from './components/createblog';
import Home from './components/home';
import Dashboard from './components/dashboard';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: CreateBlog},
  Dashboard: {screen: Dashboard}
});

const App = createAppContainer(MainNavigator);

export default App
