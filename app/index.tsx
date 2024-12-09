import React from 'react';
import { SafeAreaView } from 'react-native';
import UserLogin from './Screens/user/userLogin'; // Adjust the path based on your structure
import UserReg from './Screens/user/UserReg';

import { NavigationContainer } from '@react-navigation/native';
import { createStaticNavigation } from '@react-navigation/native';
// import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Screens/user/Home';
import Mybookings from './Screens/user/Mybookings';
import BookNow from './Screens/user/BookNow';
import Profile from './Screens/user/Profile';
import OpenScreen from './Screens/user/OpenScree';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserLogin /> */}
      <Home/>
      {/* <Mybookings/> */}
      {/* <BookNow/> */}
      {/* <OpenScreen/> */}
      {/* <Profile/> */}
      {/* <UserReg/> */}
    </SafeAreaView>
  );
}
