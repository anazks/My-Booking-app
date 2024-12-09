import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MostVisited = ({ salonImages = [] }) => {
  const renderSalon = ({ item }) => (
    <View style={styles.premiumCard}>
      <Image source={{ uri: item.image }} style={styles.premiumImage} />
      <Text style={styles.premiumTitle}>{item.title}</Text>
      <View style={styles.premiumBadge}>
        <MaterialIcons name="star" size={16} color="gold" />
        <Text style={styles.premiumBadgeText}>Premium</Text>
      </View>
      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>People Most Visited Shops</Text>
      <FlatList
        data={salonImages}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={renderSalon}
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
  premiumCard: {
    width: 200,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#daa520',
  },
  premiumImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  premiumTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  premiumBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#555',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 5,
  },
  premiumBadgeText: {
    color: 'gold',
    fontSize: 12,
    marginLeft: 5,
  },
  premiumButton: {
    backgroundColor: '#daa520',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  premiumButtonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MostVisited;
