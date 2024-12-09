import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const TrendingHairstyle = ({ trendingStyles = [] }) => {
  const renderTrendingStyle = ({ item }) => (
    <View style={styles.trendingCard}>
      <Image source={{ uri: item.image }} style={styles.trendingImage} />
      <Text style={styles.trendingText}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Trending Hairstyles</Text>
      <FlatList
        data={trendingStyles}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={renderTrendingStyle}
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
  trendingCard: {
    width: 180,
    backgroundColor: '#444',
    borderRadius: 10,
    marginRight: 15,
    alignItems: 'center',
    padding: 10,
    borderColor: '#daa520',
    borderWidth: 1,
  },
  trendingImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  trendingText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TrendingHairstyle;
