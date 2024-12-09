import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // For icons

const Profile = () => {
  const [voucherAvailable, setVoucherAvailable] = useState(false);
  const [bookingsThisMonth, setBookingsThisMonth] = useState(8); // Simulate user bookings
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState('John Doe');
  const [location, setLocation] = useState('New York');
  const [gender, setGender] = useState('Male');
  
  // Check if the user is eligible for a voucher
  useEffect(() => {
    if (bookingsThisMonth > 7) {
      setVoucherAvailable(true);
    }
  }, [bookingsThisMonth]);

  const handleEditProfile = () => {
    // Logic to edit profile (e.g., saving the changes)
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {/* Profile Header with User Icon */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{name}</Text>
      </View>

      {/* User Voucher Status */}
      {voucherAvailable && (
        <View style={styles.voucherContainer}>
          <Text style={styles.voucherText}>You have a 40% off voucher for your next booking!</Text>
        </View>
      )}

      {/* User Bookings */}
      <View style={styles.bookingsContainer}>
        <Text style={styles.bookingsText}>Total Bookings This Month: {bookingsThisMonth}</Text>
        {!voucherAvailable && bookingsThisMonth > 0 && (
          <Text style={styles.voucherEligibilityText}>
            You can earn a 40% off voucher if you book more than 7 times this month!
          </Text>
        )}
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="user-edit" size={20} color="black" />
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Modal for Editing Profile */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>

            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
              placeholderTextColor="grey"
            />

            <TextInput
              style={styles.input}
              value={location}
              onChangeText={setLocation}
              placeholder="Enter your location"
              placeholderTextColor="grey"
            />

            <TextInput
              style={styles.input}
              value={gender}
              onChangeText={setGender}
              placeholder="Enter your gender"
              placeholderTextColor="grey"
            />

            <TouchableOpacity style={styles.saveButton} onPress={handleEditProfile}>
              <Text style={styles.saveButtonText}>Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    color: 'gold',
    fontSize: 24,
    fontWeight: 'bold',
  },
  voucherContainer: {
    backgroundColor: '#222',
    padding: 15,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gold',
  },
  voucherText: {
    color: 'gold',
    fontSize: 16,
    textAlign: 'center',
  },
  bookingsContainer: {
    backgroundColor: '#222',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gold',
  },
  bookingsText: {
    color: 'gold',
    fontSize: 16,
    marginBottom: 10,
  },
  voucherEligibilityText: {
    color: '#aaa',
    fontSize: 14,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'gold',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    justifyContent: 'center',
  },
  editButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#222',
    padding: 30,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    color: 'gold',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: 'gold',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginBottom: 10,
  },
  saveButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: '#444',
  },
  closeButtonText: {
    color: 'gold',
    fontSize: 16,
  },
});

export default Profile;
