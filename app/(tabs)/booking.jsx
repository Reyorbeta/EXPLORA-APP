import { StyleSheet, Text, View, Button, FlatList, Image, Alert, TouchableOpacity, Modal, Pressable, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState } from 'react';

const apartments = [
  {
    id: '1',
    name: 'Luxury Apartment in Dubai',
    image: 'https://pic.le-cdn.com/thumbs/520x390/810/1/properties/Property-e4d96e618a3c56c6a9b4f6460585a393-116820305.jpg',
    description: 'Modern 3-bedroom apartment in the heart of Dubai with breathtaking views, fully furnished, and close to amenities.',
    price: 1500,
    rating: 4.8
  },
  {
    id: '2',
    name: 'New York City Apartment loft',
    image: 'https://photos.zillowstatic.com/fp/14049f68a0b606727db18827e8e4bd04-p_e.webp',
    description: 'Stylish loft in New York City, near Central Park, featuring 2 bedrooms, modern kitchen, and spacious living area.',
    price: 2500,
    rating: 4.7
  },
  {
    id: '3',
    name: 'Cozy Chalet in Switzerland',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzMjAxNDY5MzcyNDEwMzE5NA%3D%3D/original/55d42c21-cea6-47d3-82d2-119391cdc8dc.png?im_w=1200',
    description: 'A serene 2-bedroom chalet nestled in the Swiss Alps, perfect for those looking for peace and nature.',
    price: 2200,
    rating: 4.9
  },
  {
    id: '4',
    name: 'Modern Apartment in London',
    image: 'https://www.bing.com/th?id=ORES.MMS_5f97930ecfcc5ea2c0a326855346508b',
    description: 'Bright, modern 1-bedroom apartment in downtown London, featuring stunning views and close proximity to local cafes.',
    price: 1800,
    rating: 4.6
  },
];

export default function Booking() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleBooking = (apartmentName) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Booking Confirmation", `${apartmentName} booking confirmed!`, [{ text: "OK" }]);
    }, 1000);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedApartment(item)} style={styles.apartmentCard}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.apartmentInfo}>
        <Text style={styles.apartmentName}>{item.name}</Text>
        <Text style={styles.apartmentDescription}>{item.description}</Text>
        <Text style={styles.price}>Monthly Rent: ${item.price}</Text>
        <Text style={styles.rating}>Rating: {item.rating} ★</Text>
      </View>
      <Button title="Book Now" onPress={() => handleBooking(item.name)} color="#007BFF" />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Find Your Perfect Apartment</Text>
      <Text style={styles.description}>
        Explore luxury apartments available for rent. 
        Book your new home today!
      </Text>
      <Text style={styles.popularApartments}>Featured Apartments:</Text>
      <FlatList
        data={apartments}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      />
      {selectedApartment && (
        <Modal
          animationType="fade"
          transparent={true}
          visible={!!selectedApartment}
          onRequestClose={() => setSelectedApartment(null)}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedApartment.image }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedApartment.name}</Text>
              <Text style={styles.modalDescription}>{selectedApartment.description}</Text>
              <Text style={styles.modalPrice}>Monthly Rent: ${selectedApartment.price}</Text>
              <Text style={styles.modalRating}>Rating: {selectedApartment.rating} ★</Text>
              <Pressable style={styles.modalButton} onPress={() => handleBooking(selectedApartment.name)}>
                {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.modalButtonText}>Book Now</Text>}
              </Pressable>
              <Pressable style={styles.modalCloseButton} onPress={() => setSelectedApartment(null)}>
                <Text style={styles.modalCloseButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  popularApartments: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  list: {
    width: '100%',
  },
  apartmentCard: {
    marginRight: 15,
    alignItems: 'center',
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  apartmentInfo: {
    marginTop: 5,
    alignItems: 'center',
  },
  apartmentName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  apartmentDescription: {
    textAlign: 'center',
    fontSize: 12,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#007BFF',
    marginVertical: 5,
  },
  rating: {
    fontSize: 14,
    color: '#FFD700',
    marginVertical: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    width: '85%',
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  modalDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginVertical: 10,
  },
  modalPrice: {
    fontSize: 18,
    color: '#007BFF',
    marginVertical: 5,
  },
  modalRating: {
    fontSize: 18,
    color: '#FFD700',
    marginVertical: 5,
  },
  modalButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 12,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  modalCloseButton: {
    backgroundColor: '#ccc',
    borderRadius: 5,
    padding: 12,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
