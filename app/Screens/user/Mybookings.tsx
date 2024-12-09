import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MyBookings = () => {
  const [bookingHistory, setBookingHistory] = useState([
    {
      id: 1,
      image: 'https://static.vecteezy.com/system/resources/previews/002/372/203/non_2x/barber-shop-interior-design-free-photo.jpg',
      shopName: 'Luxury Hair Salon',
      date: '2023-12-08',
      time: '2:00 PM',
      status: 'Completed',
    },
    {
      id: 2,
      image: 'https://static.vecteezy.com/system/resources/previews/000/267/866/original/vector-special-offer-creative-sale-banner-design.jpg',
      shopName: 'Elegant Cuts',
      date: '2023-12-05',
      time: '4:00 PM',
      status: 'Pending',
    },
    {
      id: 3,
      image: 'https://content.latest-hairstyles.com/wp-content/uploads/salon.jpg',
      shopName: 'Modern Style Studio',
      date: '2023-11-29',
      time: '11:00 AM',
      status: 'Completed',
    },
  ]);

  const handleCancel = (id) => {
    Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            setBookingHistory((prev) =>
              prev.map((booking) =>
                booking.id === id ? { ...booking, status: 'Cancelled' } : booking
              )
            );
          },
        },
      ]
    );
  };

  const renderBookingCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.shopName}>{item.shopName}</Text>
        <Text style={styles.bookingDetails}>
          Date: {item.date} | Time: {item.time}
        </Text>
        <Text
          style={[
            styles.status,
            item.status === 'Completed'
              ? styles.completed
              : item.status === 'Pending'
              ? styles.pending
              : styles.cancelled,
          ]}
        >
          {item.status}
        </Text>
        {item.status === 'Pending' && (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={() => handleCancel(item.id)}
          >
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>My Bookings</Text>
        <TouchableOpacity style={styles.navIcon}>
          <MaterialIcons name="history" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={bookingHistory}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderBookingCard}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default MyBookings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
  },
  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#333',
    borderRadius: 10,
  },
  navTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gold',
  },
  navIcon: {
    padding: 5,
    backgroundColor: '#444',
    borderRadius: 5,
  },
  listContent: {
    paddingTop: 20,
    paddingBottom: 50,
  },
  card: {
    backgroundColor: '#444',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    flexDirection: 'row',
    borderColor: 'gold',
    borderWidth: 1,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gold',
    marginBottom: 5,
  },
  bookingDetails: {
    fontSize: 14,
    color: 'white',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  completed: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
  cancelled: {
    color: 'red',
  },
  cancelButton: {
    marginTop: 10,
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
