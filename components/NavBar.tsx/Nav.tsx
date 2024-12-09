import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Nav = () => {
  return (
    <View style={styles.searchBar}>
      <TouchableOpacity>
        <MaterialIcons name="location-on" size={24} color="white" />
      </TouchableOpacity>
      <TextInput
        placeholder="Near By Shops"
        placeholderTextColor="white"
        style={styles.searchInput}
      />
      <View style={styles.iconGroup}>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialIcons name="person" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper}>
          <MaterialIcons name="notifications" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    borderColor: '#daa520',
    borderWidth: 0.5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#daa520',
    fontSize: 16,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    marginLeft: 10,
  },
});

export default Nav;
