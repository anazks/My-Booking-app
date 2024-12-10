import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function OpeningScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  return (
    <View style={styles.container}>
      {/* Static BookMyCuts Text */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>BookMyCuts</Text>
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Black background
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    marginBottom: 50, // Space above the button
  },
  title: {
    fontSize: 48, // Larger font size for visibility
    color: '#FFD700', // Golden color
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'transparent', // Transparent button
    borderColor: '#FFD700', // Golden border
    borderWidth: 2,
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFD700', // Golden color
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
