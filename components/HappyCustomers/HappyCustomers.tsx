import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const HappyCustomers = ({ customers = [] }) => {
  const renderCustomer = ({ item }) => (
    <View style={styles.customerCard}>
      <Image source={{ uri: item.image }} style={styles.customerImage} />
      <Text style={styles.customerName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Happy Customers</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={renderCustomer}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  customerCard: {
    width: 100,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gold',
  },
  customerImage: {
    width: '100%',
    height: 80,
    borderRadius: 10,
    marginBottom: 5,
  },
  customerName: {
    color: '#daa520',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HappyCustomers;
