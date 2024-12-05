import React from 'react';
import { SafeAreaView } from 'react-native';
import UserLogin from '../Screens/user/userLogin'; // Adjust the path based on your structure
import UserReg from '../Screens/user/UserReg';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <UserLogin /> */}
      <UserReg/>
    </SafeAreaView>
  );
}
