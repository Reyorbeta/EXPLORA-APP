import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ProfileHeader = ({ profileData }) => (
  <View style={styles.profileHeader}>
    <Image
      source={{ uri: profileData.profileImage }}
      style={styles.profileImage}
      onError={(e) => console.error('Image load error', e)}
    />
    <Text style={styles.username}>{profileData.username}</Text>
    <Text style={styles.bio}>{profileData.bio}</Text>
  </View>
);

const StatsSection = ({ profileData }) => (
  <View style={styles.statsContainer}>
    {Object.entries({
      Trips: profileData.trips,
      'Places Explored': profileData.placesExplored,
      Followers: profileData.followers,
      Following: profileData.following,
    }).map(([label, number]) => (
      <View key={label} style={styles.statBox}>
        <Text style={styles.statNumber}>{number}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    ))}
  </View>
);

const RecentTrips = ({ trips }) => (
  <>
    <Text style={styles.sectionTitle}>Recent Trips</Text>
    <FlatList
      data={trips}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.tripCard}>
          <Image
            source={{ uri: item.image }}
            style={styles.tripImage}
            onError={(e) => console.error('Image load error', e)}
          />
          <Text style={styles.tripName}>{item.name}</Text>
        </View>
      )}
      showsHorizontalScrollIndicator={false}
    />
  </>
);

export default function Profile() {
  const [loading, setLoading] = useState(true);

  const profileData = {
    username: 'Explorer Rey',
    bio: 'Adventurer | Mountain Climber | World Traveler 🌍',
    trips: 34,
    placesExplored: 128,
    followers: 540,
    following: 213,
    recentTrips: [
      { id: '1', name: 'Mount Everest', image: 'https://i.pinimg.com/564x/69/5b/bc/695bbce262a052dc63f8e29003897c88.jpg' },
      { id: '2', name: 'Sahara Desert', image: 'https://i.pinimg.com/564x/83/fe/40/83fe408561c34a615be5045f1fda14e7.jpg' },
      { id: '3', name: 'Amazon Rainforest', image: 'https://i.pinimg.com/564x/52/98/e3/5298e3fa7485f4d56a11a823703eabdc.jpg' }
    ],
    profileImage: 'https://i.pinimg.com/564x/f2/70/6f/f2706f73b1dcc75d732444525cee5a97.jpg',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch profile data', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1e90ff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.settingsIcon}>
        <Ionicons name="" size={30} color="#666" />
      </TouchableOpacity>

      <ProfileHeader profileData={profileData} />
      <StatsSection profileData={profileData} />
      <RecentTrips trips={profileData.recentTrips} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  settingsIcon: {
    alignSelf: 'flex-end',
    padding: 15,
    marginRight: 10,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#1e90ff',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e90ff',
  },
  statLabel: {
    fontSize: 16,
    color: '#888',
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
  },
  tripCard: {
    marginLeft: 20,
    alignItems: 'center',
  },
  tripImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  tripName: {
    marginTop: 5,
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutButton: {
    backgroundColor: '#ff5c5c',
  },
});
