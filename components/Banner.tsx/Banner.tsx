import React, { useRef, useEffect, useState } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Banner = ({ banners = [] }) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (banners.length === 0) return;

    const bannerInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % banners.length;
      setCurrentIndex(nextIndex);

      if (carouselRef.current) {
        carouselRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(bannerInterval);
  }, [currentIndex, banners]);

  const renderBanner = ({ item }) => (
    <Image source={{ uri: item.image }} style={styles.bannerImage} />
  );

  return (
    <View style={styles.carouselContainer}>
      {banners.length > 0 ? (
        <FlatList
          ref={carouselRef}
          data={banners}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderBanner}
          horizontal
          pagingEnabled
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View style={styles.placeholder}>
          <Image
            source={{ uri: 'https://via.placeholder.com/300x150?text=No+Banner' }}
            style={styles.bannerImage}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  bannerImage: {
    width: width - 20,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  placeholder: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#333',
  },
});

export default Banner;
