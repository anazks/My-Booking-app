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
import OpeningScreen from './Screens/user/OpeningScreen';
import UserSelection from './Screens/user/UserSelection';
import ShopHome from './Screens/shops/ShopHome';
import ShopRegister from './Screens/shops/ShopRegister';
import ShopLogin from './Screens/shops/ShopLogin';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserLogin /> */}
      {/* <Home/> */}
      {/* <Mybookings/> */}
      {/* <BookNow/> */}
      {/* <OpeningScreen/> */}
      {/* <UserSelection/> */}
      <ShopHome/>
      {/* <ShopRegister/> */}
      {/* <ShopLogin/> */}
      {/* <Profile/> */}
      {/* <UserReg/> */}
    </SafeAreaView>
  );
}
