import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Keyboard, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300);

    return () => clearTimeout(timerId);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery && onSearch) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery]);

  const clearSearch = () => {
    setQuery('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={24}
          color="gray"
          style={styles.icon}
          accessible={true}
          accessibilityLabel="Search icon"
        />
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="gray"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={() => {
            if (query && onSearch) {
              onSearch(query);
              setQuery('');
            }
          }}
          returnKeyType="search"
          accessible={true}
          accessibilityLabel="Search input"
        />
        {query.length > 0 && (
          <TouchableOpacity onPress={clearSearch} accessible={true} accessibilityLabel="Clear search">
            <Ionicons name="close-circle" size={24} color="gray" style={styles.icon} />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://i.pinimg.com/736x/80/37/0e/80370e19ff60505bd1290fe753aa5ecb.jpg' }} // Mountain hike image
          style={styles.image}
          accessible={true}
          accessibilityLabel="Mountain hike"
        />
        <Image 
          source={{ uri: 'https://i.pinimg.com/564x/c1/f7/62/c1f7627b662dcafefc57b6846a8c0daf.jpg' }} // Beach trip image
          style={styles.image}
          accessible={true}
          accessibilityLabel="Beach trip"
        />
      </View>

      <Image 
        source={{ uri: 'https://i.pinimg.com/564x/71/9e/ee/719eee38a39a34a73c63dbac2db8cefb.jpg' }} // Replace with your country image URL
        style={styles.countryImage}
        accessible={true}
        accessibilityLabel="Country exploration"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  image: {
    width: '48%', // Adjust width to fit two images side by side
    height: 100, // Adjust height as necessary
    borderRadius: 10,
  },
  countryImage: {
    width: '100%',
    height: 150, // Adjust height as necessary
    borderRadius: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginHorizontal: 10,
    color: '#000',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default SearchBar;
