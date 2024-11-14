import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

// Define the TabIcon component
const TabIcon = ({ icon, color, size = 24, focused }) => {
    return (
        <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={icon}
                style={{
                    width: size,
                    height: size,
                    tintColor: color,
                }}
                resizeMode="contain"
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            size={30} // Adjust the size here
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="booking"
                options={{
                    title: 'Booking',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.booking}
                            color={color}
                            size={30} // Adjust the size here
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            size={30} // Adjust the size here
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="searchbar"
                options={{
                    title: 'Searchbar',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.searchbar}
                            color={color}
                            size={30} // Adjust the size here
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;