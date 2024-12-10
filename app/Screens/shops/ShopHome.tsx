import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

export default function ShopHome() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pageTitle}>Shop Owner Dashboard</Text>

      {/* Profile Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop Profile</Text>
        <Image
          source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.EL6HurGEUsBmLh8v0_rz_wHaFS&pid=Api&P=0&h=180' }}
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Payments Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payments</Text>
        <View style={styles.paymentContainer}>
          <View style={styles.paymentBox}>
            <Text style={styles.paymentLabel}>Daily</Text>
            <Text style={styles.paymentAmount}>$150</Text>
          </View>
          <View style={styles.paymentBox}>
            <Text style={styles.paymentLabel}>Weekly</Text>
            <Text style={styles.paymentAmount}>$900</Text>
          </View>
          <View style={styles.paymentBox}>
            <Text style={styles.paymentLabel}>Monthly</Text>
            <Text style={styles.paymentAmount}>$3600</Text>
          </View>
        </View>
      </View>

      {/* Upcoming Bookings Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Bookings</Text>
        <View style={styles.bookingContainer}>
          <Text style={styles.bookingItem}>Booking 1: John - 2:00 PM</Text>
          <Text style={styles.bookingItem}>Booking 2: Alice - 4:00 PM</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>View All Bookings</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Shop Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shop Details</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Update Shop Info</Text>
        </TouchableOpacity>
      </View>

      {/* Barbers Management Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Barbers Management</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add New Barber</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage Barbers</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20,
  },
  pageTitle: {
    fontSize: 30,
    color: '#FFD700', // Golden color
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#222',
    padding: 20,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentBox: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  paymentLabel: {
    color: '#FFD700',
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentAmount: {
    color: '#FFF',
    fontSize: 18,
    marginTop: 5,
  },
  bookingContainer: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
  },
  bookingItem: {
    color: '#FFF',
    fontSize: 16,
    marginBottom: 10,
  },
});
