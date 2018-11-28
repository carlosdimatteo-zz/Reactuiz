import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import Score from './components/Score';
import {createStackNavigator} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
      <Routes/>
    );
  }
}



const Routes = createStackNavigator({
    Home:Home,
    Score:Score
    },{
      initialRouteName:'Home'
    });        
