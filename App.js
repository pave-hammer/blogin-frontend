import React from 'react';
import CreateBlog from './components/createblog';
import Home from './components/home';

import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Profile: {screen: CreateBlog},
});

const App = createAppContainer(MainNavigator);

export default App;
