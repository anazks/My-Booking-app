// navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserLogin from '../Screens/user/userLogin'; // Import the Login screen
import UserReg from '../Screens/user/UserReg'; // Import the Register screen

const Stack = createNativeStackNavigator(); // Create the Stack Navigator

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="login">
      <Stack.Screen name="Login" component={UserLogin} />
      <Stack.Screen name="Register" component={UserReg} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
