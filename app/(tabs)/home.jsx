import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

// Sample data for horizontal scrolling list
const featuredItems = [
  {
    title: 'Beautiful Beach',
    image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/f3/c0/4d/belso-obol-setannyal.jpg?w=900&h=-1&s=1',
    rating: 4.8,
  },
  {
    title: 'Mountain Hike',
    image: 'https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4.6,
  },
  {
    title: 'City Tour',
    image: 'https://cf.bstatic.com/xdata/images/hotel/square600/377009166.webp?k=114c7b9802a60196735a78ef37fd2c40f5e2c5922010099b4bd1c7e5486ae405&o=',
    rating: 4.7,
  },
];

export default function Home() {
  const handleItemPress = (itemTitle) => {
    Alert.alert('Item Selected', `You clicked on ${itemTitle}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Explora App!</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.subtitle}>Explore Features:</Text>

        {[
          {
            icon: 'place',
            color: 'blue',
            title: 'Discover new places',
            description: 'Find breathtaking destinations near you or around the world.',
            image: 'https://th.bing.com/th/id/OIP.AuiFWa1UsMjnKTYx6aE8AwHaLH?w=1000&h=1500&rs=1&pid=ImgDetMain',
          },
          {
            icon: 'place',
            color: 'green',
            title: 'Local Events',
            description: 'Stay updated with the latest events happening in your area.',
            image: 'https://th.bing.com/th/id/OIP.gVG79OXI-5v3hHquCZ7bigHaE8?rs=1&pid=ImgDetMain',
          },
          {
            icon: 'rate-review',
            color: 'orange',
            title: 'User Reviews',
            description: 'Read reviews from fellow explorers about their experiences.',
            image: 'https://elfsight.com/wp-content/uploads/2019/08/booking-reviews_screenshot-2.jpg',
          },
          {
            icon: 'place',
            color: 'purple',
            title: 'Travel Tips',
            description: 'Get handy travel tips and advice to make your journey smoother.',
            image: 'https://static.vecteezy.com/system/resources/previews/014/310/351/original/traveling-safety-tips-poster-free-vector.jpg',
          },
          {
            icon: 'star',
            color: 'gold',
            title: 'Top Attractions',
            description: 'Explore the must-see attractions for your next trip.',
            image: 'https://farm9.staticflickr.com/8067/29204700756_9f43fbe127_b.jpg',
          },
          {
            icon: 'public',
            color: 'red',
            title: 'Country',
            description: 'Explore the beauty of Japan.',
            location: 'Tokyo, Japan',
            image: 'https://th.bing.com/th/id/OIP.OatYOuvvhugbPAxzr_iobwHaEo?rs=1&pid=ImgDetMain',
          },
        ].map((feature, index) => (
          <View key={index} style={styles.feature}>
            <View style={styles.featureHeader}>
              <MaterialIcons name={feature.icon} size={24} color={feature.color} />
              <Text style={styles.featureText}>{feature.title}</Text>
            </View>
            <Text style={styles.featureDescription}>{feature.description}</Text>
            {feature.image && <Image source={{ uri: feature.image }} style={styles.featureImage} />}
            {feature.location && (
              <>
                <Text style={styles.featureLocation}>Location: {feature.location}</Text>
              </>
            )}
            <Button title={feature.title.split(' ')[0]} onPress={() => alert(`${feature.title} clicked...`)} />
          </View>
        ))}

        <Text style={styles.subtitle}>Featured Items:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          {featuredItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemPress(item.title)}>
              <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.cardImage} resizeMode="cover" />
                <View style={styles.overlay}>
                  <Text style={styles.overlayText}>{item.title}</Text>
                  <View style={styles.ratingContainer}>
                    {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                      <FontAwesome key={i} name="star" size={14} color="gold" />
                    ))}
                    {item.rating % 1 !== 0 && <FontAwesome name="star-half" size={14} color="gold" />}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: '600',
  },
  feature: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  featureHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  featureDescription: {
    fontSize: 14,
    color: '#6f6f6f',
    marginBottom: 10,
  },
  featureLocation: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  featureImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  horizontalScroll: {
    marginVertical: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 10,
    width: 160,
    alignItems: 'center',
    elevation: 3,
  },
  cardImage: {
    width: 140,
    height: 120,
    borderRadius: 8,
  },
  overlay: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    padding: 5,
  },
  overlayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
});
